'use strict';

angular.module('customerModule', ["ngRoute"])
    .component('customerModule', {
        templateUrl:'/app/customer/customer.html',
        controller: function($scope,$http,$routeParams) {
        	console.log("Inicializando customerModule ...");
        }

    })
    .controller('CustomerController',function($scope, $http, $location, $routeParams, customersService){
    	
    	console.log("inicializando el CustomerDetailsController...");
    	var id = $routeParams.id;
    	
    	
    	if(isNaN(+$routeParams.id)) {
    		$scope.customer = customersService.get({id: id});
    		customersService.getPetsForCustomer(id).then(function(response) {
    			console.log("Response /api/customers/" + $routeParams.id, response);
    			$scope.customerPets = response.data;
    		});
    		
    		//SIN SERVICIOS
//	    	$http.get("/api/customers/" + $routeParams.id).then(function(response) {
//	    		console.log("Response /api/customers/" + $routeParams.id, response);
//	    		$scope.customer = response.data;
//	    	});
    		//customerResource.getPetsForCustomer
//	    	$http.get("/api/customers/" + $routeParams.id + "/pets").then(function(response) {
//	    		console.log("Response /api/customers/" + $routeParams.id + "/pets", response);
//	    		$scope.customerPets = response.data;
    		// FIN SIN SERVICIOS
    		
	    	}else {
    		$scope.customer = {};
    		$scope.customerPets = []
    	}

    	$scope.submit = function() {
    		console.log("Insert customer:", $scope.customer);
    		
    		const validationErrors = Validations.valCust($scope.customer);
    		if(validationErrors) {
    			return alert(JSON.stringify(validationErrors));
    		} 
    		
    		customersService.save({}, $scope.customer, function(customer) {}, function(error){});
//    		$http.post("/api/customers", $scope.customer).then(function(response){
//    			$scope.customer = response.data;
//    		});
    	}

    	$scope.edit = function() {
    		console.log("Update customer:", $scope.customer);
    		customersService.update({id: $scope.customer._id}, $scope.customer, function(customer) {}, function(error){});
//    		$http.put("/api/customers/" + $scope.customer._id, $scope.customer).then(function(response){
//    			$scope.customer = response.data;
//    		});
    		alert("Cliente editado");
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
