var gulp = require('gulp');
var bower = require('gulp-bower');
var ngTemplates = require('gulp-ng-template');
var sass = require('gulp-sass');

var sassFolder = './content/**/*.scss';

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

gulp.task('scripts', function () {
  gulp.src('scripts/**/*.js')
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('templates', function () {
    gulp.src('templates/**/*.html')
        .pipe(ngTemplates({
            filename: 'templates.js',
            moduleName: 'app',
            path: function (path, base) {
                return path.replace(base, '').replace('/templates', '');
            }
        }))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('dev', ['bower', 'sass', 'scripts', 'templates']);