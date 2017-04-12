angular.module('flickApp').factory('filmFactory',filmFactory);

function filmFactory($http){
    return{
        getPickedFlicks:getPickedFlicks,
    };
}

function getPickedFlicks(){
    //return $http.get('http://swapi-tpiros.rhcloud.com/flims').then(complete).catch(failed);
    //TODO get all films selected from the list, those films should be in a json object from the MongoDB
}

function complete(response){
    return response.data;
}

function failed(error){
    return error.statusText;
}