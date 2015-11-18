(function(){
    'use strict';

    describe('userService', function(){
        var $httpBackend, userService;

        beforeEach(module('app'));

        beforeEach(inject(function(_$httpBackend_, _userService_){
            $httpBackend = _$httpBackend_;
            userService =_userService_;
        }));

        afterEach(function(){
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        describe('getUsers', function(){
            var getUsersApiURL = '/api/users';
            it('should handle null result', function (){
                $httpBackend.expectGET(getUsersApiURL).respond(null);
                userService.getUsers();
                $httpBackend.flush();
                expect(userService.users).toBeDefined();
                expect(userService.users.length).toBe(0);
            });

            it('should handle error result', function (){
                var result = {
                    "data": null,
                    "status": {
                        "code": 500
                    }
                };
                $httpBackend.expectGET(getUsersApiURL).respond(result);
                userService.getUsers();
                $httpBackend.flush();
                expect(userService.users).toBeDefined();
                expect(userService.users.length).toBe(0);
            });
        });
    })
})();
