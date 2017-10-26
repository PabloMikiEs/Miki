'use strict';

angular.module('customerModule', ["ngRoute"])
    .component('customerModule', {
        templateUrl:'/app/customer/customer.html',
        controller: function($scope,$http,$routeParams) {
        	console.log("Inicializando customerModule ...");
        }

    })
    .controller('CustomerController',function($scope, $http, $location, $routeParams){
    	
    	console.log("inicializando el CustomerDetailsController...");
    	
    	if(isNaN(+$routeParams.id)) {
	    	$http.get("/api/customers/" + $routeParams.id).then(function(response) {
	    		console.log("Response /api/customers/" + $routeParams.id, response);
	    		$scope.customer = response.data;
	    	});
	    	$http.get("/api/customers/" + $routeParams.id + "/pets").then(function(response) {
	    		console.log("Response /api/customers/" + $routeParams.id + "/pets", response);
	    		$scope.customerPets = response.data;
	    	});	    	
    	} else {
    		$scope.customer = {};
    		$scope.customerPets = []
    	}

    	$scope.submit = function() {
    		console.log("Insert customer:", $scope.customer);
    		$http.post("/api/customers", $scope.customer).then(function(response){
    			$scope.customer = response.data;
    		});
    	}

    	$scope.edit = function() {
    		console.log("Update customer:", $scope.customer);
    		$http.put("/api/customers/" + $scope.customer._id, $scope.customer).then(function(response){
    			$scope.customer = response.data;
    		});
    	}
    	
    	$scope.isNew = function() {
    		return $scope.customer === undefined || $scope.customer._id === undefined;
    	}
    	
    	$scope.doTheBack = function() {
  		  window.history.back();
  		};

  		
  		
    });

    
 
    	
//    	// ESTO ES COMO SE INICIALIZA
//    	const id = $routeParams.id;
//    	
//    	$http.get("/api/customers/" + id).then(function(response){
//    		$scope.customer = response.data;
//    	});
//    	// traemos mascotas
//    	$http.get("/api/pets").then(function(response) {
//    		console.log("Aquí irían las mascotas");
//    		$scope.customerPets = response.data;
//    	});
//    	
//    	
//    	// AHORA CARGAMOS FUNCIONES
//    	$scope.submit = function(){
//    		console.log("Guardando customer...");
//    		console.log("IsNotNew?", $scope.customer._id == 'undefined');
//    		// AQUI HACEMOS EL GUARDADO
//    		$http.post("/api/customers/", $scope.customer).then(function(response) {
//    			console.log("Customer guardado", response.data);
//    			$scope.customer = response.data;
//    		});
// 	
//    	}
//    	
//    	//AQUI UPDATE PUT
//    	$scope.edit = function(){
//    		console.log("Editar customer...");
//    		console.log("IsNotNew?", $scope.customer._id == 'undefined');
//    		// AQUI HACEMOS EL GUARDADO
//    		$http.put("/api/customers/", $scope.customer._id).then(function(response) {
//    			console.log("Customer editado", response.data);
//    			$scope.customer = response.data;
//    		});
// 	
//    	}
//    	
//    	
//    	
//    });