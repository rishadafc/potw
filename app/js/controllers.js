'use strict';

/* Controllers */

var potwControllers = angular.module('potwControllers', []);
var $baseVideoURL = "//www.youtube.com/embed/";

potwControllers.controller('PlayerListCtrl', ['$scope', 'Player',
  function($scope, Player) {
    $scope.players = Player.query();

    // Default options for sorting and filtering
    $scope.orderProp = '-age';
    $scope.positionFilter = "";
  }]);

potwControllers.controller('PlayerDetailCtrl', ['$scope', '$sce', '$routeParams', 'Player',
  function($scope, $sce, $routeParams, Player) {
    $scope.player = Player.get({playerId: $routeParams.playerId}, function(player) {

      // Array of video URLs
      for (var i=0; i < $scope.player.videos.length; i++) {
        $scope.player.videos[i] = $sce.trustAsResourceUrl($baseVideoURL + $scope.player.videos[i]);
      }
    });

  }]);
