(function(){
    'use strict';

    angular.module('app')
        .factory('userService', ['$http', userService]);

    function userService($http) {
        var users = [];
        return {
            getUsers: function () {
                $http.get('/api/users').then(function (result){
                    if (result && result.status && result.status.code) {
                        users = result.data;
                    }
                })
            },
            users: users
        }
    }
})();
