module.exports = function(bh) {
    bh.match('icon_glyph_tablet', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1152 1792"><path d="M640 1408q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm384-160v-960q0-13-9.5-22.5t-22.5-9.5h-832q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5zm128-960v1088q0 66-47 113t-113 47h-832q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h832q66 0 113 47t47 113z"/></svg>',
            tag: false
        });
    });
};