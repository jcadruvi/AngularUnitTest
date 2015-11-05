angular.module('app').controller('jcDropdownController', ['$scope', jcDropdownController]);

function jcDropdownController($scope) {
    $scope.hasFocus = false;
    $scope.showDialog = false;
    $scope.text = '';
    $scope.$watch('items', function(){
       for(var i=0; $scope.items && i < $scope.items.length; i++) {
           if($scope.items[i].selected) {
               $scope.text = $scope.items[i].description;
           }
       }
    });
    $scope.onItemClick = function(item) {
        $scope.showDialog = false;
        $scope.hasFocus = false;
        $scope.text = item.description;
        for (var i=0; $scope.items && i < $scope.items.length; i++) {
            $scope.items[i].selected = false;
        }
        item.selected = true;
        if($scope.onSelect) {
            $scope.onSelect(item);
        }
    };
}
