myApp.factory('mapService', function($http, $q, $rootScope) {
    var mapFactory = {};
    mapFactory.geoCodeLocation = function (address) {
        var deferred = $q.defer();
        var coordinates = [];
        var geocoder =  new google.maps.Geocoder();
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                coordinates.push(results[0].geometry.location.lat());
                coordinates.push(results[0].geometry.location.lng());
                $rootScope.$apply(deferred.resolve({coordinates: coordinates}));
            }else {
                deferred.reject(status);
                alert("Something got wrong " + status);
               $rootScope.$apply(deferred.reject({coordinates:status}));
            }
        });
        return deferred.promise;
    };

    // mapFactory.showMap = function(address){
    //     var coordinates = [];
    //     var geocoder =  new google.maps.Geocoder();
    //     geocoder.geocode( { 'address': address}, function(results, status) {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             coordinates.push(results[0].geometry.location.lat());
    //             coordinates.push(results[0].geometry.location.lng());
    //             var map = displayMap(coordinates);
    //             //setMarker(coordinates, map);
    //             //searchLocation(map,coordinates);
    //         } else {
    //             alert("Something got wrong " + status);
    //         }
    //     });
    // };

    mapFactory.displayMap = function(coordinates) {
        var mapProp = {
            center:new google.maps.LatLng(coordinates[0],coordinates[1]),
            zoom:15
        };
        return new google.maps.Map(document.getElementById("googleMap"), mapProp);
    };

    mapFactory.setMarker = function (coordinates, map) {
        var marker=new google.maps.Marker({
            position:new google.maps.LatLng(coordinates[0],coordinates[1])
        });

        marker.setMap(map);
    };

    mapFactory.searchLocation = function (map, coordinates) {
        var request = {
            location:new google.maps.LatLng(coordinates[0],coordinates[1]) ,
            radius: '500',
            types: ['restaurant']
        };
        // Create the PlaceService and send the request.
        // Handle the callback with an anonymous function.
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    var marker = new google.maps.Marker({
                        position: place.geometry.location
                    });
                    marker.setMap(map);
                }
            }
        });
    };

    return mapFactory;
});
