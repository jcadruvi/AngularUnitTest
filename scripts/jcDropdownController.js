angular.module('app').controller('jcDropdownController', ['$scope', jcDropdownController]);

function jcDropdownController($scope) {
    $scope.scopeDialog = false;
    $scope.text = 'Test text';
}
