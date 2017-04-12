angular.module('flickApp').controller('mainController',mainController)

function mainController(filmFactory)
{
    var vm = this;
    filmFactory().getAllFilms().then(function(response){
        vm.films = response;
    });
   
}

