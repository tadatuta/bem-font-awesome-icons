module.exports = function(bh) {
    bh.match('icon_glyph_arrow-left', function(ctx) {
        ctx.content({
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 1792"><path d="M1536 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z"/></svg>',
            tag: false
        });
    });
};
