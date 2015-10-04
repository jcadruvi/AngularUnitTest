describe('jcDropdown', function (){
    var $compile,
        $rootScope;

    beforeEach(module('app'));

    beforeEach(inject(function (_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('testing', function () {
        var $scope,
            element;
        $scope = $rootScope.$new();
        element = $compile('<jc-dropdown></jc-dropdown>')($scope);
        $scope.$digest();
        expect(element.html()).toEqual('This is the dropdown directive.');
    });
});