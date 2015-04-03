'use strict';

/* App Module */

var potwApp = angular.module('potwApp', [
  'ngRoute',
  'potwAnimations',
  'potwControllers',
  'angular-flexslider',
  'potwServices'
]);

potwApp.config(['$routeProvider',
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

      // use the HTML5 History API
        $locationProvider.html5Mode(true);
  }]);
