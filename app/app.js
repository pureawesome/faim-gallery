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
]);
//.
//config(['$routeProvider', function($routeProvider) {
//  $routeProvider.otherwise({redirectTo: '/view1'});
//}]);

var flickrControllers = angular.module('flickrControllers', []);

flickrControllers.controller('FlickrGetCtrl', ['$scope', 'Images',
  function($scope, Images) {
  //  Images.get(function(data){
  //    $scope.images = data;
  //  });
//    $scope.images = Images.query();

  }]);

flickrControllers.controller('ctrl', ['$scope', 'JsonService', 'JsonImage',
  function($scope, JsonService, JsonImage) {
     JsonService.get(function(data){
        $scope.jsonitems = data.photos.photo;

    });
//    $scope.flickrlist = $scope.jsonitems.photos;
    $scope.jsonimage = JsonImage.get();
  }

myApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/:photosetId', {
        templateUrl: 'views/photoset.html',
        controller: 'PhotosetCtrl'
      }).
      when('/:photosetId/:photoId', {
        templateUrl: 'views/photo.html',
        controller: 'PhotoCtrl'
      }).
      otherwise({
        redirectTo:'index.html'
      });
    }
]);





  //JsonService.get(function(data){
  //  $scope.name = data.name;
  //  $scope.children = data.children;
  //});




]);
