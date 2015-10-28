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
            input;
        $scope = $rootScope.$new();
        element = $compile('<jc-dropdown></jc-dropdown>')($scope);
        $scope.$digest();
        $element = $(element);
        dialog = $element.find('.dropdown-dialog.ng-hide');
        input = $element.find('.dropdown-input');
        expect(dialog).toBeDefined();
        expect(dialog.length).toEqual(1);
        expect(input).toBeDefined();
        expect(input.length).toEqual(1);

    });
});