(function() {
    'use strict';

    angular.module('app').directive('dropdown', dropdown);

    function dropdown() {
        var self = {};

        self.replace = true;
        self.restrict = 'E';
        self.template = '<p>This is the dropdown directive.</p>';

        return self;
        /*return {
            replace: true,
            restrict: 'E',
            scope: {
                items: '=',
                onSelect: '='
            },
            template: ''
            //templateUrl: 'dropdown.html'
        };*/
	}
})();
