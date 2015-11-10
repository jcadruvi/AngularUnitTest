angular.module('app').controller('indexController', ['$scope', indexController]);

function indexController($scope) {
    $scope.items = [
        { id: 1, description: "item 1"},
        { id: 2, description: "item 2"},
        { id: 3, description: "item 3", selected: true }
    ];

    $scope.users = [
        {
            city: "San Jose",
            email: "jdoe@gmail.com",
            name: "John Doe",
            phone: "(123) 456-7890",
            state: "CA"
        }
    ];

    $scope.onDropdownSelect = function(item) {
        console.log(item);
    };
}
