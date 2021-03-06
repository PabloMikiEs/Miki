'use strict';

angular.module('customerModule', ["ngRoute"])
    .component('customerModule', {
        templateUrl:'/app/customer/customer.html',
        controller: function($scope,$http,$routeParams) {
        	console.log("Inicializando customerModule ...");
        }

    })
    .controller('CustomerController',function($scope, $http, $location, $routeParams, customersServices){
    	
    	console.log("inicializando el CustomerDetailsController...");
    	var id = $routeParams.id;
    	
    	
    	if(isNaN(+$routeParams.id)) {
    		$scope.customer = customersServices.get({id: id});
    		customersServices.getPetsForCustomer(id).then(function(response) {
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

