module.exports = function(bh) {
    bh.match('icon_glyph_adjust', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 1792"><path d="M768 1440v-1088q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73zm768-544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>',
            tag: false
        });
    });
};
