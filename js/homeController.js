myApp.controller('homeController', function ($location, $scope){

    $scope.go = function() {
        $location.path('/map/' + $scope.inputAddress);
    };
});
