'use strict';

angular.module('petModule', ["ngRoute"])
    .component('petModule', {
        templateUrl:'/app/pet/pet.html',
        controller: function($scope,$http,$routeParams) {
        	console.log("Inicializando Pet Module ...");
        }

    })
    .controller('petController',function($scope, $http, $location, $routeParams){
    	console.log("inicializando el PetController...");
    	
    	if(isNaN(+$routeParams.id)) {
	    	$http.get("/api/pets/" + $routeParams.id).then(function(response) {
	    		console.log("Response /api/pets/" + $routeParams.id, response);
	    		$scope.pet = response.data;
	    	});    	
    	} else {
    		$scope.pet = {};
    		// aqui hacemos un if para coger el customer id como 
    		// $scope.pet.ownerId = $routeParams.costumerId;
    	}

    	$scope.submit = function() {
    		console.log("Insert pet:", $scope.pet);
    		$http.post("/api/pets", $scope.pet).then(function(response){
    			$scope.pet = response.data;
    		});
    	}

    	$scope.edit = function() {
    		console.log("Update pet:", $scope.pet);
    		$http.put("/api/pets/" + $scope.pet._id, $scope.pet).then(function(response){
    			$scope.pet = response.data;
    		});
    	}
    	
//    	$scope.isNew = function() {
//    		return $scope.pet === undefined || $scope.pet._id === undefined;
//    	}
    });
