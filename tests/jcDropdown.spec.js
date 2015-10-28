describe('jcDropdown', function (){
    var $compile,
        $rootScope;

    beforeEach(module('app'));

    beforeEach(inject(function (_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should not have a dialog if there are not items.', function () {
        var $scope,
            $element,
            element,
            dialog,
            input,
            items;
        $scope = $rootScope.$new();
        element = angular.element('<jc-dropdown></jc-dropdown>');
        $compile(element)($scope);
        $scope.$digest();
        $element = $(element);
        dialog = $element.find('.dropdown-dialog.ng-hide');
        input = $element.find('.dropdown-input');
        items = $element.find('.dropdown-item');
        expect(dialog).toBeDefined();
        expect(dialog.length).toEqual(1);
        expect(input).toBeDefined();
        expect(input.length).toEqual(1);
        expect(items).toBeDefined();
        expect(items.length).toEqual(0);
    });

    it('should have a dialog with 3 items.', function () {
        var $scope,
            $element,
            element,
            dialog,
            input,
            items;
        $scope = $rootScope.$new();
        $scope.items = [
            { id: 1, description: "item 1"},
            { id: 2, description: "item 2"},
            { id: 3, description: "item 3"}
        ];
        element = angular.element('<jc-dropdown items="items"></jc-dropdown>')
        $compile(element)($scope);
        $scope.$digest();
        $element = $(element);
        dialog = $element.find('.dropdown-dialog');
        input = $element.find('.dropdown-input');
        items = $element.find('.dropdown-item');
        expect(dialog).toBeDefined();
        expect(dialog.length).toEqual(1);
        expect(dialog).toBeDefined();
        expect(input).toBeDefined();
        expect(input.length).toEqual(1);
        expect(items).toBeDefined();
        expect(items.length).toEqual(3);
        expect($(items[0]).html()).toEqual("item 1");
        expect($(items[1]).html()).toEqual("item 2");
        expect($(items[2]).html()).toEqual("item 3");
    });
});