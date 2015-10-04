module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'angular-filesort'],
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'scripts/**/*.js',
      'tests/**/*.spec.js'
    ],
    angularFilesort: {
      whitelist: [
        'scripts/**/*.js'
      ]
    }
  });
};