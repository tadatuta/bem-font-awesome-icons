module.exports = function(bh) {
    bh.match('icon_glyph_delicious', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 1792"><path d="M1472 1376v-480h-704v-704h-480q-93 0-158.5 65.5t-65.5 158.5v480h704v704h480q93 0 158.5-65.5t65.5-158.5zm64-960v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg>',
            tag: false
        });
    });
};
