angular.module('app').controller('indexController', ['$scope', 'userService', indexController]);

function indexController($scope, userService) {
    var vm = this;

    vm.items = [
        { id: 1, description: "item 1"},
        { id: 2, description: "item 2"},
        { id: 3, description: "item 3", selected: true }
    ];

    vm.showCards = true;
    vm.showGrid = false;

    vm.service = userService;
    userService.init();

    vm.onDropdownSelect = function(item) {
        console.log(item);
    };
}
