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

    it("should update text to blank if no item is selected.", function() {

    });

    it("should update text to a selected item.", function() {
        var jcDropdownController, $scope = $rootScope.$new();
        $scope.items = [
            { id: 1, description: "item 1"},
            { id: 2, description: "item 2"},
            { id: 3, description: "item 3", selected: true }
        ];
        jcDropdownController = $controller('jcDropdownController', { $scope: $scope});
        expect(jcDropdownController).toBeDefined();
        //expect($scope.text).toEqual("item 3");
    });

});
