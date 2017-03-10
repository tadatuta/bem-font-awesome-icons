module.exports = function(bh) {
    bh.match('icon_glyph_area-chart', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1792"><path d="M2048 1536v128h-2048v-1536h128v1408h1920zm-384-1024l256 896h-1664v-576l448-576 576 576z"/></svg>',
            tag: false
        });
    });
};
