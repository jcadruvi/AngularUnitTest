angular.module('app').controller('indexController', ['$scope', 'userService', indexController]);

function indexController($scope, userService) {
    $scope.items = [
        { id: 1, description: "item 1"},
        { id: 2, description: "item 2"},
        { id: 3, description: "item 3", selected: true }
    ];

    $scope.service = userService;
    userService.init();

    $scope.onDropdownSelect = function(item) {
        console.log(item);
    };
}
