module.exports = function(bh) {
    bh.match('icon_glyph_eyedropper', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1698 94q94 94 94 226.5t-94 225.5l-225 223 104 104q10 10 10 23t-10 23l-210 210q-10 10-23 10t-23-10l-105-105-603 603q-37 37-90 37h-203l-256 128-64-64 128-256v-203q0-53 37-90l603-603-105-105q-10-10-10-23t10-23l210-210q10-10 23-10t23 10l104 104 223-225q93-94 225.5-94t226.5 94zm-1186 1378l576-576-192-192-576 576v192h192z"/></svg>',
            tag: false
        });
    });
};