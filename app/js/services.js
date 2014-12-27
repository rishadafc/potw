'use strict';

/* Services */

var potwServices = angular.module('potwServices', ['ngResource']);

potwServices.factory('Player', ['$resource',
  function($resource){
    return $resource('players/:playerId.json', {}, {
      query: {method:'GET', params:{playerId:'players'}, isArray:true}
    });
  }]);
