module.exports = function(bh) {
    bh.match('icon_glyph_dropbox', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M402 707l494 305-342 285-490-319zm986 555v108l-490 293v1l-1-1-1 1v-1l-489-293v-108l147 96 342-284v-2l1 1 1-1v2l343 284zm-834-1144l342 285-494 304-338-270zm836 589l338 271-489 319-343-285zm-151-589l489 319-338 270-494-304z"/></svg>',
            tag: false
        });
    });
};
