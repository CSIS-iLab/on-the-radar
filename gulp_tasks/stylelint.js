const argv = require('yargs').argv
const config = require('../frasco.config.js')
const gulp = require('gulp')
const styleLint = require('gulp-stylelint')

gulp.task('styleLint', function() {
  let autoFix = false
  let failAfterError = false
  if (argv.fix) {
    autoFix = true
  }

  if (argv.allow_stylelint_fail) {
    failAfterError = true
  }

  let stream = gulp
    .src(config.assets + '/' + config.sass.src + '/**/*.scss')
    .pipe(
      styleLint({
        failAfterError: failAfterError,
        reporters: [{ formatter: 'string', console: true }],
        fix: autoFix
      })
    )

  if (autoFix) {
    stream = stream.pipe(gulp.dest(config.assets + '/' + config.sass.src))
  }

  return stream
})
