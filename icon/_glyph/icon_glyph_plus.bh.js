module.exports = function(bh) {
    bh.match('icon_glyph_plus', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1408 1792"><path d="M1408 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg>',
            tag: false
        });
    });
};