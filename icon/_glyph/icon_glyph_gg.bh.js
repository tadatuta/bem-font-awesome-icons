module.exports = function(bh) {
    bh.match('icon_glyph_gg', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1792"><path d="M736 800l384 384-384 384-672-672 672-672 168 168-96 96-72-72-480 480 480 480 193-193-289-287zm576-576l672 672-672 672-168-168 96-96 72 72 480-480-480-480-193 193 289 287-96 96-384-384z"/></svg>',
            tag: false
        });
    });
};