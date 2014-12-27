'use strict';

/* Services */

var potwServices = angular.module('potwServices', ['ngResource']);

potwServices.factory('Player', ['$resource',
  function($resource){
    return $resource('app/players/:playerId.json', {}, {
      query: {method:'GET', params:{playerId:'players'}, isArray:true}
    });
  }]);
