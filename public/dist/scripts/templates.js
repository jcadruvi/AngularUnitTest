;(function(){

'use strict';

angular.module('app').run(['$templateCache', function($templateCache) {

  $templateCache.put('jcDropdown.html', '<div>\n    <input class="dropdown-input" type="text" ng-model="text" ng-click="hasFocus = true" ng-blur="hasFocus = false"/>\n    <div class="dropdown-dialog" ng-show="showDialog || hasFocus" ng-mouseenter="showDialog = true" ng-mouseleave="hasFocus = false; showDialog = false">\n        <div class="dropdown-item" ng-repeat="item in items" ng-bind="item.description" ng-click="onItemClick(item)"></div>\n    </div>\n</div>');

  $templateCache.put('jcUserCard.html', '<div class="user-container">\n    <div class="user-name"><strong ng-bind="name"></strong></div>\n    <div class="user-field-container">\n        <div class="user-field">\n            <span>Email: </span>\n            <span ng-bind="email"></span>\n        </div>\n        <div class="user-field">\n            <span>Phone: </span>\n            <span ng-bind="phone"></span>\n        </div>\n        <div class="user-field">\n            <span>City: </span>\n            <span ng-bind="city"></span>\n        </div>\n        <div class="user-field">\n            <span>State: </span>\n            <span ng-bind="state"></span>\n        </div>\n    </div>\n</div>');

}]);

})();