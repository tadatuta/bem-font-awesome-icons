module.exports = function(bh) {
    bh.match('icon_glyph_codepen', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M216 1169l603 402v-359l-334-223zm-62-144l193-129-193-129v258zm819 546l603-402-269-180-334 223v359zm-77-493l272-182-272-182-272 182zm-411-275l334-223v-359l-603 402zm960 93l193 129v-258zm-138-93l269-180-603-402v359zm485-180v546q0 41-34 64l-819 546q-21 13-43 13t-43-13l-819-546q-34-23-34-64v-546q0-41 34-64l819-546q21-13 43-13t43 13l819 546q34 23 34 64z"/></svg>',
            tag: false
        });
    });
};
