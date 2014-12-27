'use strict';

/* Controllers */

var potwControllers = angular.module('potwControllers', []);

potwControllers.controller('PlayerListCtrl', ['$scope', 'Player',
  function($scope, Player) {
    $scope.players = Player.query();
    $scope.orderProp = 'age';
  }]);

potwControllers.controller('PlayerDetailCtrl', ['$scope', '$sce', '$routeParams', 'Player',
  function($scope, $sce, $routeParams, Player) {
    $scope.player = Player.get({playerId: $routeParams.playerId}, function(player) {
      $scope.mainImageUrl = player.images[0];

      // Video URL
      $scope.videoUrl = $sce.trustAsResourceUrl($scope.player.videoUrl);
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
