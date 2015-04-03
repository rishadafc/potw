'use strict';

/* App Module */

var potwApp = angular.module('potwApp', [
  'ngRoute',
  'potwAnimations',
  'potwControllers',
  'angular-flexslider',
  // 'potwFilters',
  'potwServices'
]);

potwApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/player-list.html',
        controller: 'PlayerListCtrl'
      }).    
      when('/players', {
        templateUrl: 'partials/player-list.html',
        controller: 'PlayerListCtrl'
      }).
      when('/players/:playerId', {
        templateUrl: 'partials/player-detail.html',
        controller: 'PlayerDetailCtrl'
      }).
      otherwise({
        redirectTo: '/players'
      });
  }]);
