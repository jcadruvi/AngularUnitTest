(function() {
    'use strict';

    angular.module('app').directive('jcDropdown', jcDropdown);

    function jcDropdown() {
        return {
            controller: 'jcDropdownController',
            controllerAs: 'vm',
            bindToController: {
                items: '=',
                onSelect: '='
            },
            replace: true,
            restrict: 'E',
            scope: {},
            templateUrl: 'jcDropdown.html'
        };
	}
})();
