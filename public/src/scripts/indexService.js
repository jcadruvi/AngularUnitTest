(function(){
    'use strict';

    angular.module('app')
        .factory('indexService', indexService);

    function indexService(){
        var self = {};

        self.showCards = true;
        self.showGrid = false;

        return self;
    }
})();