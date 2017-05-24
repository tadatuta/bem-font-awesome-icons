module.exports = function(bh) {
    bh.match('icon_glyph_thermometer-empty', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1792"><path d="M640 1344q0 80-56 136t-136 56-136-56-56-136q0-79 56-135.5t136-56.5 136 56.5 56 135.5zm128 0q0-77-34-144t-94-112v-768q0-80-56-136t-136-56-136 56-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5t226.5 93.5 226.5-93.5 93.5-226.5zm128 0q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-182 128-313v-711q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5v711q128 131 128 313zm128-576v128h-192v-128h192zm0-256v128h-192v-128h192zm0-256v128h-192v-128h192z"/></svg>',
            tag: false
        });
    });
};
