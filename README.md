# On the Radar

The website for the On the Radar study by the CSIS Project on Nuclear Issues (PONI) program. It is built on the [CSIS Jekyll Starter](https://github.com/CSIS-iLab/csis-jekyll-starter) that utilizes gulp, Sass, Autoprefixer, PostCSS, Webpack, imagemin, and Browsersync to speed-up development.

## Table of Contents

- [Quick-Start Instructions](#quick-start-instructions)
- [Usage](#usage)
  - [Local Development](#local-development)
  - [Build for Production](#build-for-production)
  - [See More Commands](#see-more-commands)
  - [Jekyll](#jekyll)
- [What's Included](#whats-included)

## Quick-start Instructions

```shell
$ git clone https://github.com/CSIS-iLab/health-commission.git
$ cd csis-jekyll-starter
$ npm install
$ npm start
```

## Usage

### Local Development

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting, etc.

```shell
$ npm start
```

### Build for Production

This will set the `JEKYLL_ENV` to `production` and use the production config file(s) set in `frasco.config.js` to override default settings.

```shell
$ npm run build
```

### See More Commands

This will display all available commands, such as running eslint or imagemin independently.

```shell
$ npm run
```

### Jekyll

You can also use any of the default Jekyll commands listed in their [docs](https://jekyllrb.com/docs/usage/).

## What's Included

For more information on what is included and modifying the default configuration, see the [What's Included guide](DEVELOPMENT.md).

- [gulp](https://gulpjs.com/)
- [Sass](http://sass-lang.com/)
- [Stylelint](http://stylelint.io)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [PostCSS](http://postcss.org/)
- [Webpack](https://webpack.github.io/)
- [UglifyJS](https://github.com/mishoo/UglifyJS2)
- [imagemin](https://github.com/imagemin/imagemin)
- [Browsersync](https://www.browsersync.io/)

## Contributing

### Branching

When modifying the code base, always make a new branch. Unless it's necessary to do otherwise, all branches should be created off of `master`.

Branches should use the following naming conventions:

| Branch type               | Name                                                      | Example                     |
| ------------------------- | --------------------------------------------------------- | --------------------------- |
| New Feature               | `feature/<short description of feature>`                  | `feature/header-navigation` |
| Bug Fixes                 | `bug/<short description of bug>`                          | `bug/mobile-navigation`     |
| Documentation             | `docs/<short description of documentation being updated>` | `docs/readme`               |
| Code clean-up/refactoring | `refactor/<short description>`                            | `refactor/apply-linting`    |
| Content Updates           | `content/<short description of content>`                  | `content/add-new-posts`     |

When ready to merge, submit a Pull Request into `master`. All code will be reviewed by the lead developer on the project before being merged into `master`.

### Commit Messages

Write clear and concise commit messages describing the changes you are making and why. If there are any issues associated with the commit, include the issue # in the commit title.

### CSS Styles

- This project uses the [BEM](http://getbem.com/introduction/) naming convention.
- This project uses [Stylelint](https://stylelint.io) to maintain a consistent code style. Errors are flagged in the console during development and can be automatically fixed by running `npm run stylelint-fix`.

## Copyright / License

Copyright © 2018 CSIS iDeas Lab under the [MIT License](https://github.com/CSIS-iLab/on-the-radar/blob/master/LICENSE).
