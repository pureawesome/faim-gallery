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


flickrServices.factory('JsonService', function($resource) {
  return $resource('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=df540b08597fa735a4a2cad5a3a3fab8&user_id=40947201%40N07&format=json&nojsoncallback=1&auth_token=72157649235852531-77c1e6ce8c9b7051&api_sig=e9161f86f55c76523d4be87eb12e9a6e'
  );
});

flickrServices.factory('JsonImage', function($resource){
  return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=df540b08597fa735a4a2cad5a3a3fab8&photo_id=15319605531&format=json&nojsoncallback=1&auth_token=72157649235852531-77c1e6ce8c9b7051&api_sig=ced47279f04578d76246e2744e22b1b3'
  //{},
  //{
  //  query: {method:'GET', params:{photoId:'15319605531'}, isArray:false}
  //}
  );
});


flickrServices.factory('JsonService2', function($resource) {
  return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2a198ad2956ba79b426a5d27887d2374&user_id=40947201%40N07&format=json&nojsoncallback=1'
  );
});
