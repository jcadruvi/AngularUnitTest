(function(){
    'use strict';

    angular.module('app')
        .factory('userService', ['$http', userService]);

    function userService($http) {
        var users = [];
        return {
            getUsers: function () {
                $http.get('/api/users').then(function (result){
                    if (result && result.data && result.data.status && result.data.status.code == 200) {
                        users = result.data.data;
                    } else {
                        users = [];
                    }
                })
            },
            users: users
        }
    }
})();
