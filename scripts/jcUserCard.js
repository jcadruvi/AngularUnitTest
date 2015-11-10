(function() {
    'use strict';

    angular.module('app').directive('jcUserCard', jcUserCard);

    function jcUserCard() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                city: '=',
                email: '=',
                name: '=',
                phone: '=',
                state: '='
            },
            templateUrl: 'jcUserCard.html'
        };
	}
})();

