module.exports = function(bh) {
    bh.match('icon_glyph_sort-down', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M1024 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/></svg>',
            tag: false
        });
    });
};