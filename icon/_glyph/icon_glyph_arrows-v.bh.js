module.exports = function(bh) {
    bh.match('icon_glyph_arrows-v', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 1792"><path d="M704 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"/></svg>',
            tag: false
        });
    });
};