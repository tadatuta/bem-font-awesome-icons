module.exports = function(bh) {
    bh.match('icon_glyph_stumbleupon', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1792"><path d="M1062 712v-118q0-42-30-72t-72-30-72 30-30 72v612q0 175-126 299t-303 124q-178 0-303.5-125.5t-125.5-303.5v-266h328v262q0 43 30 72.5t72 29.5 72-29.5 30-72.5v-620q0-171 126.5-292t301.5-121q176 0 302 122t126 294v136l-195 58zm530 222h328v266q0 178-125.5 303.5t-303.5 125.5q-177 0-303-124.5t-126-300.5v-268l131 61 195-58v270q0 42 30 71.5t72 29.5 72-29.5 30-71.5v-275z"/></svg>',
            tag: false
        });
    });
};