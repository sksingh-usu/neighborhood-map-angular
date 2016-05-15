//Define an angular module for our app
var myApp = angular.module('myApp', []);
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/restaurants', {
            templateUrl: 'templates/restaurants.html',
            controller: 'restaurantController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

