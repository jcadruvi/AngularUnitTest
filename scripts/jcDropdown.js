(function() {
    'use strict';

    angular.module('app').directive('jcDropdown', jcDropdown);

    function jcDropdown() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                items: '=',
                onSelect: '='
            },
            templateUrl: 'app/dropdown.html'
        };
	}
})();
