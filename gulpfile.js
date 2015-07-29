var gulp = require('gulp');
var bower = require('gulp-bower');
var ngTemplates = require('gulp-ng-template');
var sass = require('gulp-sass');

var config = {
    jsFolder: 'scripts/**/*.js',
    sassFolder: './content/**/*.scss',
    templatesFolder: 'templates/**/*.html'
};

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('dist/bower'))
});

gulp.task('sass', function () {
  gulp.src(config.sassFolder)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/content/css'));
});

gulp.task('watch', function () {
  gulp.watch(config.jsFolder, ['scripts']);
  gulp.watch(config.sassFolder, ['sass']);
  gulp.watch(config.templatesFolder, ['templates']);
});

gulp.task('scripts', function () {
  gulp.src(config.jsFolder)
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('templates', function () {
    gulp.src(config.templatesFolder)
        .pipe(ngTemplates({
            filename: 'templates.js',
            moduleName: 'app',
            path: function (path, base) {
                return path.replace(base, '').replace('/templates', '');
            }
        }))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('dev', ['bower', 'sass', 'scripts', 'templates', 'watch']);