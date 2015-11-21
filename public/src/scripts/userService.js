(function(){
    'use strict';

    angular.module('app')
        .factory('userService', ['$http', userService]);

    function userService($http) {
        var self = {};

        self.users = [];

        self.getUsers = function () {
            $http.get('/api/users').then(function (result) {
                if (result && result.data && result.data.status && result.data.status.code == 200) {
                    self.users = result.data.data;
                } else {
                    self.users = [];
                }
            });
        };

        return self;
    }
})();
