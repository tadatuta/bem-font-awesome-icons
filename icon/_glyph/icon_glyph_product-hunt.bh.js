module.exports = function(bh) {
    bh.match('icon_glyph_product-hunt', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1150 762q0 56-39.5 95t-95.5 39h-253v-269h253q56 0 95.5 39.5t39.5 95.5zm179 0q0-130-91.5-222t-222.5-92h-433v896h180v-269h253q130 0 222-91.5t92-221.5zm463 134q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"/></svg>',
            tag: false
        });
    });
};
