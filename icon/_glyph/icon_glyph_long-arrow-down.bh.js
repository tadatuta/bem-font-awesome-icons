module.exports = function(bh) {
    bh.match('icon_glyph_long-arrow-down', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 1792"><path d="M765 1299q8 19-5 35l-350 384q-10 10-23 10-14 0-24-10l-355-384q-13-16-5-35 9-19 29-19h224v-1248q0-14 9-23t23-9h192q14 0 23 9t9 23v1248h224q21 0 29 19z"/></svg>',
            tag: false
        });
    });
};
