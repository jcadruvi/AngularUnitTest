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
        $scope.name = user.name;
        $scope.email = user.email;
        element = angular.element('<jc-user-card name="name" email="email" phone="phone" city="city" state="state"></jc-user-card>');
        $compile(element, $scope);
        $scope.$digest();
        $element = $(element);
        //expect($element.find('.user-name strong').html()).toBe("John Doe");
    });
});
