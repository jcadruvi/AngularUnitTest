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

            it('should handle success result', function (){
                var result = {
                    "data": [
                     {
                        city: "San Jose",
                        email: "johndoe@gmail.com",
                        name: "John Doe",
                        phone: "(123) 456-7890",
                        state: "CA"
                    },
                    {
                        city: "San Fransisco",
                        email: "janedoe@gmail.com",
                        name: "Jane Doe",
                        phone: "(123) 456-7891",
                        state: "CA"
                    },
                    {
                        city: "San Jose",
                        email: "johnsmith@gmail.com",
                        name: "John Smith",
                        phone: "(123) 456-7892",
                        state: "CA"
                    }],
                    "status": {
                        "code": 200
                    }
                };
                $httpBackend.expectGET(getUsersApiURL).respond(result);
                userService.getUsers();
                $httpBackend.flush();
                expect(userService.users).toBeDefined();
                expect(userService.users.length).toBe(3);
            });

            it('should handle success and then failure result', function (){
                var successResult = {
                    "data": [
                     {
                        city: "San Jose",
                        email: "johndoe@gmail.com",
                        name: "John Doe",
                        phone: "(123) 456-7890",
                        state: "CA"
                    },
                    {
                        city: "San Fransisco",
                        email: "janedoe@gmail.com",
                        name: "Jane Doe",
                        phone: "(123) 456-7891",
                        state: "CA"
                    },
                    {
                        city: "San Jose",
                        email: "johnsmith@gmail.com",
                        name: "John Smith",
                        phone: "(123) 456-7892",
                        state: "CA"
                    }],
                    "status": {
                        "code": 200
                    }
                };
                var failureResult = {
                    "data": [
                     {
                        city: "San Jose",
                        email: "johndoe@gmail.com",
                        name: "John Doe",
                        phone: "(123) 456-7890",
                        state: "CA"
                    }],
                    "status": {
                        "code": 500
                    }
                };
                $httpBackend.expectGET(getUsersApiURL).respond(successResult);
                userService.getUsers();
                $httpBackend.flush();
                expect(userService.users).toBeDefined();
                expect(userService.users.length).toBe(3);

                $httpBackend.expectGET(getUsersApiURL).respond(failureResult);
                userService.getUsers();
                $httpBackend.flush();
                expect(userService.users).toBeDefined();
                expect(userService.users.length).toBe(0);
            });
        });
    })
})();
