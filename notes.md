# Light/Dark Dashboard project

## Functional requirements

- light/dark mode toggle : take system preference by default, but can overide with toggle

  - what HTML markup (accessible) : -- [https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/](https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/)
  - Use fieldset, legent, and radio inputs : -- [https://www.accessibility-developer-guide.com/examples/forms/good-example/](https://www.accessibility-developer-guide.com/examples/forms/good-example/)
  - Switching between light & dark mode via JS and prefers-color-scheme media query
    - [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
  - Tree option toggle : light/dark/system preference : ---
    - [https://codepen.io/renddrew/pen/bRomab](https://codepen.io/renddrew/pen/bRomab)

- CSS variables (Custom properties) : -- [https://css-tricks.com/updating-a-css-variable-with-javascript/](https://css-tricks.com/updating-a-css-variable-with-javascript/)
- Accessiblily

  - use correct Heading tags
  - Screenreader-only text for card titles/username : -- [https://www.accessibility-developer-guide.com/examples/hiding-elements/visually/](https://www.accessibility-developer-guide.com/examples/hiding-elements/visually/)

## Dependencies

- I used Gulp to compile sass files
- babel/preset-env for more compatibility
- postcss
- autoprefixer
- browser-sync
- cssnano
- dart-sass
- gulp-babel
- gulp-postcss
- gulp-sass
- gulp-terser
