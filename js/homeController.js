myApp.controller('homeController', function ($location, $scope, mapService, $rootScope){
    
    $scope.renderMap = function () {
        var geoCodeLocationPromise = mapService.geoCodeLocation($scope.inputAddress);
        geoCodeLocationPromise.then(function(data) {
            var map = mapService.displayMap(data.coordinates);
            mapService.setMarker(data.coordinates, map);
            renderPlaces(map,data.coordinates);
        });
    };
    
    var renderPlaces = function(map, coordinates){
        var locationPromise = mapService.searchLocation(map, coordinates);
        locationPromise.then(function (data) {
            $rootScope.places = data.places;
            $rootScope.markers=data.markers;
            $location.path('/restaurants');
        });
    };
});
