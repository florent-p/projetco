// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');

// SASS + SUSY
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
      .pipe(sass({
          outputStyle: 'expanded',
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(gulp.dest('app/css'));
});

// WATCH
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

// INJECTION FICHIERS HEADER
gulp.task('index', function () {
  var target = gulp.src('app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./app/**/*.js', './app/**/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('app/'));
});