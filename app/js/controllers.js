'use strict';

/* Controllers */

var potwControllers = angular.module('potwControllers', []);
var $baseVideoURL = "//www.youtube.com/embed/";

potwControllers.controller('PlayerListCtrl', ['$scope', 'Player',
  function($scope, Player) {
    $scope.players = Player.query();
    $scope.orderProp = 'age';
  }]);

potwControllers.controller('PlayerDetailCtrl', ['$scope', '$sce', '$routeParams', 'Player',
  function($scope, $sce, $routeParams, Player, $fullVideoUrl) {
    $scope.player = Player.get({playerId: $routeParams.playerId}, function(player) {
      $scope.mainImageUrl = player.images[0];

      // Video URL
      
      $scope.fullVideoUrl = $baseVideoURL.concat($scope.player.videoId);
      $scope.videoUrl = $sce.trustAsResourceUrl($scope.fullVideoUrl);
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
