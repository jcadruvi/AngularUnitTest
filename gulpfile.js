var gulp = require('gulp'),
    bower = require('gulp-bower'),
    ngTemplates = require('gulp-ng-template'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

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
    .pipe(gulp.dest('./dist/content/css'))
      .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
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