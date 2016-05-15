myApp.controller('mapController', function ($rootScope, $routeParams, $scope, mapService){

    // $scope.message = mapService.getData();
    // console.log($routeParams.address);

    var renderMap = function (address) {
        var geoCodeLocationPromise = mapService.geoCodeLocation(address);
        geoCodeLocationPromise.then(function(data) {
            var map = mapService.displayMap(data.coordinates);
            mapService.setMarker(data.coordinates, map);
            mapService.searchLocation(map,data.coordinates);
        });
    };
    renderMap($routeParams.address);

});
