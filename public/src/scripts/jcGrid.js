(function(){
    'use strict';

    angular.module('app')
        .directive('jcGrid', jcGrid);

    function jcGrid() {
        return {
            controller: 'jcGridController',
            controllerAs: 'vm',
            bindToController: {
                columns: '=',
                rows: '='
            },
            replace: true,
            restrict: 'E',
            scope: {},
            templateUrl: 'jcGrid.html'
        }
    }
})();
