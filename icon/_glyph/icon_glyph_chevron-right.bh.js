module.exports = function(bh) {
    bh.match('icon_glyph_chevron-right', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1792"><path d="M1107 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"/></svg>',
            tag: false
        });
    });
};