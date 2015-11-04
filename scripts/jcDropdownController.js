angular.module('app').controller('jcDropdownController', ['$scope', jcDropdownController]);

function jcDropdownController($scope) {
    $scope.hasFocus = false;
    $scope.showDialog = false;
    $scope.text = '';
    $scope.onItemClick = function(item) {
        $scope.showDialog = false;
        $scope.hasFocus = false;
        $scope.text = item.description;
        if($scope.onSelect) {
            $scope.onSelect(item);
        }
    };
}
