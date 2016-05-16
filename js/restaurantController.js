
myApp.controller('restaurantController', function ($scope, $rootScope) {

    $scope.updateMarkers = function(){
        var  A = $scope.filteredPlaces;
        var pinList = [];
        angular.forEach(A, function(place){
           pinList.push(place.name);
        });
        var B = $rootScope.places;
        var diff = B.filter(function(x) { return pinList.indexOf(x) < 0 });
        for(var i=0; i<B.length; i++){
            var place = $rootScope.places[i];
            var index = diff.indexOf(place);
            if(index !=-1){
                $rootScope.markers[i].setMap(null);
            }else{
                $rootScope.markers[i].setMap($rootScope.map);
            }
        }
    };
    
    $scope.getContent = function () {

    };
});