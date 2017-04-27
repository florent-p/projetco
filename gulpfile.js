// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bs = require('browser-sync').create();


// BROWSERSYNC
gulp.task('browser-sync', function() {
    bs.init({
        server : {
            baseDir: './'
        }
    });
});

// SASS + SUSY
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
      .pipe(sass({
          outputStyle: 'expanded',
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(autoprefixer("last 2 versions", "> 1%", "Explorer 7", "Android 2"))
      .pipe(gulp.dest('app/css'))
      .pipe(bs.reload({stream: true}));
});

// WATCH
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', bs.reload);
});