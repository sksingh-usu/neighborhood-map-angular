myApp.controller('homeController', function ($location, $scope, mapService, $rootScope){

    $scope.goTo = function () {
        $rootScope.inputAddress = $scope.inputAddress;
        $('.jumbotron').css('display','none');
        $location.path('/restaurants/' +  $scope.inputAddress);
    };

    $scope.loadPopularMap = function(city) {
        $('.popularMaps').css('display','none');
        $location.path('/restaurants/' + city);
    };
});
