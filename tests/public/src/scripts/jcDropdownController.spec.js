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
        var vm, $scope = $rootScope.$new(), onSelectFired = false;
        vm = $controller('jcDropdownController', { $scope: $scope});
        vm.items = [
            { id: 1, description: "item 1"},
            { id: 2, description: "item 2"},
            { id: 3, description: "item 3", selected: true }
        ];
        vm.showDialog = true;
        vm.hasFocus = true;
        vm.text = "";
        vm.onSelect = function () {
            onSelectFired = true;
        };
        vm.onItemClick(vm.items[0]);
        expect(vm.showDialog).toEqual(false);
        expect(vm.hasFocus).toEqual(false);
        expect(vm.text).toEqual("item 1");
        expect(onSelectFired).toEqual(true);
        expect(vm.items[0].selected).toEqual(true);
        expect(vm.items[1].selected).toEqual(false);
        expect(vm.items[2].selected).toEqual(false);
    });

});
