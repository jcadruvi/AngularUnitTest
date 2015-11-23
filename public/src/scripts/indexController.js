angular.module('app').controller('indexController', ['$scope', 'userService', indexController]);

function indexController($scope, userService) {
    this.items = [
        { id: 1, description: "item 1"},
        { id: 2, description: "item 2"},
        { id: 3, description: "item 3", selected: true }
    ];

    this.service = userService;
    userService.init();

    this.onDropdownSelect = function(item) {
        console.log(item);
    };
}
