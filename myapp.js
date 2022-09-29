let app=angular.module("myapp",['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/db',{
        controller:"dashboardController",
        templateUrl:"db/dashboard.html"

    })
    .when('/heroes',{
    controller:"heroesController",
    templateUrl:"heroes/heroes.html"
    })
    .otherwise('/')
    

}])