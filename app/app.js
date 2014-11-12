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
        controller: 'ctrl'
      }).
      when('/:photosetId', {
        templateUrl: 'views/photoset.html',
        controller: 'ctrl'
      }).
      when('/:photosetId/:photoId', {
        templateUrl: 'views/photo.html',
        controller: 'PhotoCtrl'
      }).
      otherwise({
        redirectTo:'/'
      });
    }
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

flickrControllers.controller('ctrl', ['$scope', 'JsonService',
  function($scope, JsonService) {
     JsonService.get(function(data){
        $scope.jsonitems = data.photos.photo;

    });
//    $scope.flickrlist = $scope.jsonitems.photos;
//    $scope.jsonimage = JsonImage.get();
  }]);

flickrControllers.controller('PhotoCtrl', ['$scope', 'JsonImage',
  function($scope, JsonImage) {
     JsonImage.get(function(data){
    //    $scope.jsonitem = data.photo;
    });
  }]);






  //JsonService.get(function(data){
  //  $scope.name = data.name;
  //  $scope.children = data.children;
  //});
