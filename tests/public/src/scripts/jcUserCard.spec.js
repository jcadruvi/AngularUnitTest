describe('jcUserCard', function() {

    var $compile,
        $rootScope;

    beforeEach(module('app'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should display user name.', function() {
        var $element,
            $scope,
            element,
            name,
            user;

        user = {
            city: "San Jose",
            email: "johndoe@gmail.com",
            name: "John Doe",
            phone: "(123) 456-7890",
            state: "CA"
        };
        $scope = $rootScope.$new();
        $rootScope.user = user;
        element = angular.element('<jc-user-card user="user"></jc-user-card>');
        $compile(element, $scope);
        $scope.$digest();
        $element = $(element);
        for (property in user) {
            if (user.hasOwnProperty(property)) {
                expect($scope.user[property]).toEqual(user[property]);
            }
        }
        //expect($element.find('.user-name strong').html()).toBe("John Doe");
    });
});
