module.exports = function(bh) {
    bh.match('icon_glyph_black-tie', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 1792"><path d="M0 128h1536v1536h-1536v-1536zm1085 1115l-221-631 221-297h-634l221 297-221 631 317 304z"/></svg>',
            tag: false
        });
    });
};
