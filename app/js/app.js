'use strict';

/* App Module */

var potwApp = angular.module('potwApp', [
  'ngRoute',
  'potwAnimations',
  'potwControllers',
  'angular-flexslider',
  'potwServices'
]);

potwApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
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

      $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: true
          });
  }]);
