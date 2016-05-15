myApp.controller('homeController', function ($location, $scope, mapService){

    $scope.go = function() {
        $location.path('/map/' + $scope.inputAddress);
    };

    $scope.renderMap = function () {
        var geoCodeLocationPromise = mapService.geoCodeLocation($scope.inputAddress);
        geoCodeLocationPromise.then(function(data) {
            var map = mapService.displayMap(data.coordinates);
            mapService.setMarker(data.coordinates, map);
            mapService.searchLocation(map,data.coordinates);
        });
    };
});
