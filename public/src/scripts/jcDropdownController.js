(function(){
    'use strict';
    angular.module('app').controller('jcDropdownController', ['$scope', jcDropdownController]);

    function jcDropdownController($scope) {
        var vm = this; // jshint ignore:line
        vm.hasFocus = false;
        vm.showDialog = false;
        vm.text = '';
        $scope.$watch('items', function(){
           for(var i=0; vm.items && i < vm.items.length; i++) {
               if(vm.items[i].selected) {
                   vm.text = vm.items[i].description;
               }
           }
        });
        vm.onItemClick = function(item) {
            vm.showDialog = false;
            vm.hasFocus = false;
            vm.text = item.description;
            for (var i=0; vm.items && i < vm.items.length; i++) {
                vm.items[i].selected = false;
            }
            item.selected = true;
            if(vm.onSelect) {
                vm.onSelect(item);
            }
        };
    }
})();
