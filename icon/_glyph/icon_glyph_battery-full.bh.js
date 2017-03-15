module.exports = function(bh) {
    bh.match('icon_glyph_battery-full', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2304 1792"><path d="M1920 512v768h-1664v-768h1664zm128 576h128v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288zm256-384v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160q53 0 90.5 37.5t37.5 90.5z"/></svg>',
            tag: false
        });
    });
};