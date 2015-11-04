angular.module('app').controller('jcDropdownController', ['$scope', jcDropdownController]);

function jcDropdownController($scope) {
    $scope.hasFocus = false;
    $scope.scopeDialog = false;
    $scope.onItemClick = function(item) {
        
        if($scope.onSelect) {
            $scope.onSelect(item);
        }
    };
}
