module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'angular-filesort'],
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'scripts/**/*.js',
      'dist/scripts/templates.js',
      'tests/**/*.spec.js'
    ],
    angularFilesort: {
      whitelist: [
        'scripts/**/*.js'
      ]
    }
  });
};