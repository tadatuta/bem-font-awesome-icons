module.exports = function(bh) {
    bh.match('icon_glyph_columns', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792"><path d="M160 1536h608v-1152h-640v1120q0 13 9.5 22.5t22.5 9.5zm1376-32v-1120h-640v1152h608q13 0 22.5-9.5t9.5-22.5zm128-1216v1216q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/></svg>',
            tag: false
        });
    });
};
