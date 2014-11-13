'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'flickrControllers',
  'flickrServices',
  'wu.masonry'
])
.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl'
      }).
      when('/photoset/:photosetId', {
        templateUrl: 'views/photoset.html',
        controller: 'PhotosetCtrl'
      }).
      when('/photo/:photoId', {
        templateUrl: 'views/photo.html',
        controller: 'PhotoCtrl'
      }).
      otherwise({
        redirectTo:'/'
      });
    }
]);

var flickrControllers = angular.module('flickrControllers', []);

flickrControllers.controller('MainCtrl', ['$scope', 'JsonService',
  function($scope, JsonService) {
     JsonService.get(function(data){
        $scope.photos = data.photos.photo;
    });
  }]);

flickrControllers.controller('PhotoCtrl', ['$scope', '$routeParams', 'JsonImage',
  function($scope, $routeParams, JsonImage) {
    JsonImage.get({photoId: $routeParams.photoId}, function(data){
        $scope.photo = data.photo;
    });
  }]);

flickrControllers.controller('PhotosetCtrl', ['$scope', '$routeParams', 'JsonSet',
  function($scope, JsonSet) {
    JsonImage.get({photosetId: $routeParams.photosetId}, function(data){
      $scope.photoset = data;
    });
  }]);





  //JsonService.get(function(data){
  //  $scope.name = data.name;
  //  $scope.children = data.children;
  //});
