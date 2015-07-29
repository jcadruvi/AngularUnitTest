var gulp = require('gulp'),
    bower = require('gulp-bower'),
    jshint = require('gulp-jshint'),
    jsstylish = require('jshint-stylish'),
    ngTemplates = require('gulp-ng-template'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

var config = {
    jsFolder: 'scripts/**/*.js',
    sassFolder: './content/**/*.scss',
    templatesFolder: 'templates/**/*.html'
};

var doSassTask = function () {
    return gulp.src(config.sassFolder)
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('./dist/content/css'));
};

var doScriptsTask = function () {
    return gulp.src(config.jsFolder)
               .pipe(jshint())
               .pipe(jshint.reporter(jsstylish))
               .pipe(jshint.reporter('fail'))
               .pipe(gulp.dest('./dist/scripts'));
};

var doTemplatesTask = function () {
    return gulp.src(config.templatesFolder)
                .pipe(ngTemplates({
                    filename: 'templates.js',
                    moduleName: 'app',
                    path: function (path, base) {
                        return path.replace(base, '').replace('/templates', '');
                    }
                }))
                .pipe(gulp.dest('dist/scripts'));
};

var doWatchTask = function () {
    gulp.watch(config.jsFolder, ['scripts']);
    gulp.watch(config.sassFolder, ['sass']);
    gulp.watch(config.templatesFolder, ['templates']);
};

gulp.task('bower', function() {
    return bower()
             .pipe(gulp.dest('dist/bower'))
});

gulp.task('sass', function (){
    doSassTask();
});

gulp.task('sass:reload', function () {
    doSassTask().pipe(livereload());
});

gulp.task('watch', function() {
    doWatchTask();
});

gulp.task('watch:reload', function () {
    livereload.listen();
    doWatchTask();
});

gulp.task('scripts', function () {
    doScriptsTask();
});

gulp.task('scripts:reload', function () {
    doScriptsTask().pipe(livereload());
});

gulp.task('templates', function () {
    doTemplatesTask();
});

gulp.task('templates:reload', function () {
    doTemplatesTask().pipe(livereload());
});

gulp.task('dev', ['bower', 'sass', 'scripts', 'templates', 'watch']);
gulp.task('dev:reload', ['bower', 'sass:reload', 'scripts:reload', 'templates:reload', 'watch:reload']);