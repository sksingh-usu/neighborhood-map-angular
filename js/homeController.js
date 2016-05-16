myApp.controller('homeController', function ($location, $scope, mapService, $rootScope){

    $scope.renderMap = function () {
        if($scope.inputAddress != undefined || $scope.inputAddress != null){
            var geoCodeLocationPromise = mapService.geoCodeLocation($scope.inputAddress);
            geoCodeLocationPromise.then(function(data) {
                $rootScope.map = mapService.displayMap(data.coordinates);
                mapService.setMarker(data.coordinates, $rootScope.map);
                renderPlaces($rootScope.map , data.coordinates);
            });
        }
    };
    
    var renderPlaces = function(map, coordinates){
        var locationPromise = mapService.searchLocation(map, coordinates);
        locationPromise.then(function (data) {
            $rootScope.places = data.places;
            $rootScope.markers= data.markers;
            $rootScope.placeDescriptionList = data.placeDescriptionList;
            $location.path('/restaurants');
        });
    };
});
