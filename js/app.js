//Define an angular module for our app
var myApp = angular.module('myApp', []);
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/map/:address', {
            templateUrl: 'templates/map.html',
            controller: 'mapController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

myApp.controller('AddOrderController', function($scope) {
    $scope.message = 'This is Add new order screen';
});