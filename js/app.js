
var myApp = angular.module('myApp',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/restaurants/:address',{templateUrl:'templates/restaurants.html',controller: 'restaurantController'})
            .otherwise({redirectTo:''});
    }]);
