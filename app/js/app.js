'use strict';

/* App Module */

var potwApp = angular.module('potwApp', [
  'ngRoute',
  'potwAnimations',
  'potwControllers',
  // 'potwFilters',
  'potwServices'
]);

potwApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
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
