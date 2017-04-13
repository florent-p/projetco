// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// SASS + SUSY
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
      .pipe(sass({
          outputStyle: 'expanded',
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(autoprefixer("last 2 versions", "> 1%", "Explorer 7", "Android 2"))
      .pipe(gulp.dest('app/css'));
});

// WATCH
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});