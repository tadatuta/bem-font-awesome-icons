module.exports = function(bh) {
    bh.match('icon_glyph_battery-3', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2304 1792"><path d="M256 1280v-768h1280v768h-1280zm1920-704q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zm0 512v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z"/></svg>',
            tag: false
        });
    });
};
