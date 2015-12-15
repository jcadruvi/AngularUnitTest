(function(){
    'use strict';

    angular.module('app')
        .factory('indexService', indexService);

    function indexService(){
        var self = {};

        self.gridColumns = [
            { "field": "name", "name": "Name"},
            { "field": "email", "name": "Email"},
            { "field": "phone", "name": "Phone"},
            { "field": "city", "name": "City"},
            { "field": "state", "name": "State"}
        ];
        self.showCards = true;
        self.showGrid = false;

        self.onCardClick = function() {
            self.showCards = true;
            self.showGrid = false;
        };

        self.onGridClick = function() {
            self.showGrid = true;
            self.showCards = false;
        };

        return self;
    }
})();