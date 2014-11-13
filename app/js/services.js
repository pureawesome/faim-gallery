'use strict';

/* Services */
var flickrServices = angular.module('flickrServices', ['ngResource']);

flickrServices.factory('Images', ['$resource',
  function($resource){
    var key = 'bffa891518357b9177c29878df244a1e';
    var secret = '8d1a0e3a0a251f07';
    return $resource('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=2a198ad2956ba79b426a5d27887d2374&photoset_id=72157647898339152&format=json&auth_token=72157648855300076-7b5658a8e3e32f56&api_sig=fe5fa1536c507c39b1b0978bdfdfaf4f',
      {'query' : {method: 'GET', isArray: false}},
      { format: 'json', jsoncallback: 'JSON_CALLBACK' },
      { 'load':{ 'method': 'JSONP' }}
      );
}]);

//flcikr call flickr.people.getPhotos with tags
flickrServices.factory('JsonService', function($resource) {
  return $resource('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=071da634edc308bd47cc06715f12e139&user_id=40947201%40N07&extras=tags&format=json&nojsoncallback=1'
  );
});

flickrServices.factory('JsonImage', ['$resource', function($resource){
    return $resource(
      'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=071da634edc308bd47cc06715f12e139&photo_id=:photoId&format=json&nojsoncallback=1',
      {
        photoId: '@photoId'
      },
      {
        query: {method:'GET',
        isArray:false}
      }
    );
}]);

flickrServices.factory('JsonSet', function($resource){
    return $resource(
      'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=071da634edc308bd47cc06715f12e139&photoset_id=:photosetId&format=json&nojsoncallback=1',
      {
        photoId: '@photosetId'
      },
      {
        query: {method:'GET',
        isArray:false}
      }
    );
});


flickrServices.factory('JsonService2', function($resource) {
  return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2a198ad2956ba79b426a5d27887d2374&user_id=40947201%40N07&format=json&nojsoncallback=1'
  );
});
