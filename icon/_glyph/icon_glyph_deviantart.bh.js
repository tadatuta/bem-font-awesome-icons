module.exports = function(bh) {
    bh.match('icon_glyph_deviantart', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M1024 303l-303 582 24 31h279v415h-507l-44 30-142 273-30 30h-301v-303l303-583-24-30h-279v-415h507l44-30 142-273 30-30h301v303z"/></svg>',
            tag: false
        });
    });
};
