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
    	
    	if(typeof $routeParams.id !== 'undefined' ) {
	    	$http.get("/api/pets/" + $routeParams.id).then(function(response) {
	    		console.log("Response /api/pets/" + $routeParams.id, response);
	    		$scope.pet = response.data;
	    	});    	
    	} else {
    		$scope.pet = {};
    		$scope.pet.ownerId = $routeParams.customerId;
    	}

    	$scope.submit = function() {
    		console.log("Insert pet:", $scope.pet);
    		const validationErrors = Validations.valPet($scope.pet);
    		if(validationErrors) {
    			return alert(JSON.stringify(validationErrors));
    		}  
    		
    		$http.post("/api/pets", $scope.pet).then(function(response){
    			$scope.pet = response.data;
    			alert("Mascota añadida");
    			history.back();
    		});
    	}

    	$scope.edit = function() {
    		console.log("Update pet:", $scope.pet);
    		$http.put("/api/pets/" + $scope.pet._id, $scope.pet).then(function(response){
    			$scope.pet = response.data;
    			alert("Mascota actualizada");
    		});
    	}
    	
    	$scope.delete = function() { 
    		$http.delete("/api/pets/" + $scope.pet._id, $scope.pet).then(
					function(response) {
						alert("Mascota borrada");
						$scope.pet = response.data;
						history.back();
					}, function() {
						alert("Ha fallado el borrado!");
						history.back();
					});
    	}
    	
    	$scope.doTheBack = function() {
    		  window.history.back();
    		};
    });
