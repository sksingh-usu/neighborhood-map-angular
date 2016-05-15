
myApp.controller('restaurantController', function ($scope, $rootScope) {

    $scope.updateMarkers = function(){
        angular.forEach($scope.filteredPlaces, function(place){
           var index = $rootScope.places.indexOf(place);
            if(index !=-1){
                $rootScope.markers[index].setMap(null);
            }
        });
    }
});