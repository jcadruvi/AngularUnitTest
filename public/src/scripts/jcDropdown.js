(function() {
    'use strict';

    angular.module('app').directive('jcDropdown', jcDropdown);

    function jcDropdown() {
        return {
            controller: 'jcDropdownController',
            replace: true,
            restrict: 'E',
            scope: {
                items: '=',
                onSelect: '='
            },
            templateUrl: 'jcDropdown.html'
        };
	}
})();
