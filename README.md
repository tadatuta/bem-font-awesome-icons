# bem-font-awesome-icons

[Font Awesome](http://fontawesome.io) icons extracted as SVG in BEM notation.

Please refer to [the list of icons with their names](https://tadatuta.github.io/bem-font-awesome-icons/).

## Content

The library provides two modifiers for each icon:
* `bg` to use SVG as background image
* `glyph` to use inline SVG via templates (BEMHTML or BH)

```
icon/
    _bg/
        icon_bg_500px.css
        icon_bg_500px.svg
        icon_bg_address-book-o.css
        icon_bg_address-book-o.svg
        # and so on
    _glyph/
        icon_glyph_500px.bemhtml.js
        icon_glyph_500px.bh.js
        icon_glyph_address-book-o.bemhtml.js
        icon_glyph_address-book-o.bh.js
        # and so on
```

## Installation

1. Add the library to project dependencies:
    ```
    npm i bem-font-awesome-icons --save
    ```
2. Add it as [redefinition level](https://en.bem.info/methodology/key-concepts/#redefinition-level)

3. If you don't use [bem-components](https://en.bem.info/platform/libs/bem-components/) with `icon` block please add `icon.css` with something like this:

```css
.icon {
    display: inline-block;

    text-align: center;

    background: 50% no-repeat;
}

/* Hack for correct baseline positioning */
.icon:empty:after {
    visibility: hidden;

    content: '\00A0';
}

.icon > img,
.icon > svg {
    margin: -5.15em 0 -5em; /* 0.15 — magic number, empirically found */

    vertical-align: middle;
}
```

You're done :)

## Usage

### BEMJSON
```js
{ block: 'icon', mods: { bg: '500px' } }
{ block: 'icon', mods: { glyph: '500px' } }
```

### HTML
```html
<div class="icon icon_bg_500px"></div>
```
