(function() {
    'use strict';

    angular.module('app').directive('jcUserCard', jcUserCard);

    function jcUserCard() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                user: '='
            },
            templateUrl: 'jcUserCard.html'
        };
	}
})();

