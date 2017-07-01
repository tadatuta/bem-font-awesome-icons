const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const fontBlast = require('font-blast');
const mv = require('mv');

const BLOCK_NAME = 'icon';
const MOD_SEPARATOR = '_';
const MOD_NAME = 'glyph';
const BG_MOD_NAME = 'bg';

const blockWithModName = BLOCK_NAME + MOD_SEPARATOR + BG_MOD_NAME;

const faSourceFolder = path.join('node_modules', 'font-awesome');

fs.existsSync(BLOCK_NAME) || fs.mkdirSync(BLOCK_NAME);
if (!fs.existsSync(path.join(BLOCK_NAME, MOD_SEPARATOR + MOD_NAME))) {
    fs.mkdirSync(path.join(BLOCK_NAME, MOD_SEPARATOR + MOD_NAME));
}
if (!fs.existsSync(path.join(BLOCK_NAME, MOD_SEPARATOR + BG_MOD_NAME))) {
    fs.mkdirSync(path.join(BLOCK_NAME, MOD_SEPARATOR + BG_MOD_NAME));
}

fs.writeFileSync(path.join(BLOCK_NAME, MOD_SEPARATOR + MOD_NAME, BLOCK_NAME + MOD_SEPARATOR + MOD_NAME + '.css'),
    `.icon svg {
    fill: currentColor;
}\n`);

const selectorRegexp = /\.fa\-(.+)\:before/; // .fa-clock-o:before

const css = fs.readFileSync(path.join(faSourceFolder, 'css', 'font-awesome.css'), 'utf8');

const glyphToEntityMap = {};
const entityToGlyphMap = {};
const fa = postcss.plugin('fa', function(options = {}) {
    return function(css) {
        css.walkRules(function(rule) {
            const selectors = rule.selector.split(',');

            let firstParsedModVal;

            selectors.forEach(selector => {
                const parsedSelector = selectorRegexp.exec(selector);

                if (!parsedSelector) return;

                const modVal = parsedSelector[1];
                firstParsedModVal || (firstParsedModVal = modVal);

                const styleArr = [
                    '.' + blockWithModName + MOD_SEPARATOR + modVal + ' {'
                ];

                rule.walkDecls(function(decl, i) {
                    const glyphId = decl.value.slice(2, decl.value.length - 1);

                    glyphToEntityMap[glyphId] = blockWithModName + MOD_SEPARATOR + firstParsedModVal;
                    entityToGlyphMap[blockWithModName + MOD_SEPARATOR + modVal] = glyphId;
                    styleArr.push(decl.raws.before + '  background-image: url(' + blockWithModName + MOD_SEPARATOR + firstParsedModVal + '.svg);');
                });

                styleArr.push('\n}');

                fs.writeFileSync(path.join(BLOCK_NAME, MOD_SEPARATOR + BG_MOD_NAME, blockWithModName + MOD_SEPARATOR + modVal + '.css'), styleArr.join(''));
            });
        });
    }
});

function getBemhtmlTmpl(modVal, svg) {
    return `block('icon').mod('${MOD_NAME}', '${modVal}').content()({
    html: '${svg}'
});\n`
}

function getBhTmpl(modVal, svg) {
    return `module.exports = function(bh) {
    bh.match('icon_${MOD_NAME}_${modVal}', function(ctx) {
        ctx.content({
            html: '${svg}',
            tag: false
        });
    });
};\n`
}

postcss([fa]).process(css).then(result => {
    fontBlast(path.join(faSourceFolder, 'fonts', 'fontawesome-webfont.svg'), 'tmp', { filenames: glyphToEntityMap });

    const readGlyphs = {};

    Promise.all(Object.keys(entityToGlyphMap).map(entity => {
        const glyphId = entityToGlyphMap[entity];
        const filename = glyphToEntityMap[glyphId] + '.svg';
        const modVal = entity.split(MOD_SEPARATOR).pop();

        const svgContent = readGlyphs[filename] || (readGlyphs[filename] = fs.readFileSync(path.join('tmp', 'svg', filename), 'utf8'));

        fs.writeFileSync(path.join(BLOCK_NAME, MOD_SEPARATOR + MOD_NAME, BLOCK_NAME + MOD_SEPARATOR + MOD_NAME + MOD_SEPARATOR + modVal + '.bemhtml.js'),
            getBemhtmlTmpl(modVal, svgContent));

        fs.writeFileSync(path.join(BLOCK_NAME, MOD_SEPARATOR + MOD_NAME, BLOCK_NAME + MOD_SEPARATOR + MOD_NAME + MOD_SEPARATOR + modVal + '.bh.js'),
            getBhTmpl(modVal, svgContent));

        return mv(path.join('tmp', 'svg', filename), path.join(__dirname, BLOCK_NAME, MOD_SEPARATOR + BG_MOD_NAME, filename), err => {
            if (err && err.code !== 'ENOENT') console.error(err);
        });
    })).then(() => console.log('Done'));
});
