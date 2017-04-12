angular.module('flickApp',['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'templates/list.html',
        controller: 'mainController',
        controllerAs:'vm'
    })
    .otherwise({
        redirectTo:'/'
    })
}

