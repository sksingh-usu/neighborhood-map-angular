//
// //Define an angular module for our app
// var myApp = angular.module('myApp', ['ngRoute']);
// myApp.config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/restaurants', {
//             templateUrl: 'templates/restaurants.html',
//             controller: 'restaurantController'
//         }).
//         otherwise({
//             redirectTo: '/'
//         });
//     }]);

var myApp = angular.module('myApp',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/restaurants',{templateUrl:'templates/restaurants.html',controller: 'restaurantController'})
            .otherwise({redirectTo:'/'});
    }]);
