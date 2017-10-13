'use strict';

angular.module('customerModule', ["ngRoute"])
    .component('customerModule', {
        templateUrl:'/app/customer/customer.html',
        controller: function($scope,$http,$routeParams) {
        	console.log("Inicializando customerModule ...");
        }

    })
    .controller('CustomerController',function($scope, $http, $location, $routeParams){
    	
    	// ESTO ES COMO SE INICIALIZA
    	const id = $routeParams.id;
    	
    	$http.get("/api/customers/" + id).then(function(response){
    		$scope.customer = response.data;
    	});
    	// traemos mascotas
    	$http.get("/api/pets").then(function(response) {
    		console.log("Response pepe");
    		$scope.customerPets = response.data;
    	});
    	// AHORA CARGAMOS FUNCIONES
    	$scope.submit = function(){
    		console.log("Guardando customer...");
    		console.log("IsNotNew?", $scope.customer._id == 'undefined');
    		// AQUI HACEMOS EL GUARDADO
    		$http.post("/api/customers/", $scope.customer).then(function(response) {
    			console.log("Customer guardado", response.data);
    			$scope.customer = response.data;
    		});
 	
    	}
    	
    	//AQUI UPDATE PUT
    	$scope.edit = function(){
    		console.log("Editar customer...");
    		console.log("IsNotNew?", $scope.customer._id == 'undefined');
    		// AQUI HACEMOS EL GUARDADO
    		$http.put("/api/customers/", $scope.customer._id).then(function(response) {
    			console.log("Customer editado", response.data);
    			$scope.customer = response.data;
    		});
 	
    	}
    	
    	
    	
    });
