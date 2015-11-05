/**
 * Created by Josh on 11/4/2015.
 */

describe('jcDropdown', function () {
    var $controller,
        $rootScope;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    it("should select item on click.", function() {
        var jcDropdownController, $scope = $rootScope.$new(), onSelectFired = false;
        $scope.items = [
            { id: 1, description: "item 1"},
            { id: 2, description: "item 2"},
            { id: 3, description: "item 3", selected: true }
        ];
        $scope.showDialog = true;
        $scope.hasFocus = true;
        $scope.text = "";
        $scope.onSelect = function () {
            onSelectFired = true;
        };
        jcDropdownController = $controller('jcDropdownController', { $scope: $scope});
        $scope.onItemClick($scope.items[0]);
        expect($scope.showDialog).toEqual(false);
        expect($scope.hasFocus).toEqual(false);
        expect($scope.text).toEqual("item 1");
        expect(onSelectFired).toEqual(true);
        expect($scope.items[0].selected).toEqual(true);
        expect($scope.items[1].selected).toEqual(false);
        expect($scope.items[2].selected).toEqual(false);
    });

});
