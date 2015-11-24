(function() {
    'use strict';

    angular.module('app').directive('jcDropdown', jcDropdown);

    function jcDropdown() {
        return {
            controller: 'jcDropdownController',
            controllerAs: 'vm',
            bindToController: true,
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
