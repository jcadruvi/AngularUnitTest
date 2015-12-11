angular.module('app').controller('indexController', ['$scope', 'indexService', 'userService', indexController]);

function indexController($scope, indexService, userService) {
    var vm = this;

    vm.items = [
        { id: 1, description: "item 1"},
        { id: 2, description: "item 2"},
        { id: 3, description: "item 3", selected: true }
    ];

    vm.indexService = indexService;
    vm.userService = userService;
    userService.init();

    vm.onDropdownSelect = function(item) {
        console.log(item);
    };
}
