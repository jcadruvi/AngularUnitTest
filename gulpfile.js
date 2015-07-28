var gulp = require('gulp');
var bower = require('gulp-bower');
var sass = require('gulp-sass');

var sassFolder = './content/**/*.scss';
var templateCache = {
  file: 'templates.js',
  options: {
    module: 'app',
    root: 'app/',
    standAlone: false
  }
};

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('dist/bower'))
});

gulp.task('sass', function () {
  gulp.src(sassFolder)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/content/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(sassFolder, ['sass']);
});

gulp.task('dev', ['bower', 'sass:watch']);