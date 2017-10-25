'use strict';

angular.module('appointmentDetailModule', ["ngRoute"])
    .component('appointmentDetailModule', {
        templateUrl:'/app/appointmentDetail/appointment.html',
        controller: function($scope,$http,$routeParams) {
        	console.log("Inicializando appointmentModule ...");
        }

    })
    .controller('appointmentController',function($scope, $http, $location, $routeParams){
    	
    	console.log("inicializando el appointmentDetailsController...");
    	
    	if(isNaN(+$routeParams.id)) {
	    	$http.get("/api/appointments/" + $routeParams.id).then(function(response) { 
	    		$scope.appointment = response.data;
	    		console.log("Response /api/appointments/" + $routeParams.id);
	    	});   	
    	} else {
    		$scope.appointment = {};
    	}

//    	$scope.submit = function() {
//    		console.log("Insert customer:", $scope.customer);
//    		$http.post("/api/customers", $scope.customer).then(function(response){
//    			$scope.customer = response.data;
//    		});
//    	}
//
//    	$scope.edit = function() {
//    		console.log("Update customer:", $scope.customer);
//    		$http.put("/api/customers/" + $scope.customer._id, $scope.customer).then(function(response){
//    			$scope.customer = response.data;
//    		});
//    	}
//    	
//    	$scope.isNew = function() {
//    		return $scope.customer === undefined || $scope.customer._id === undefined;
//    	}
	    	
	    // Para regresar a la vista anterior
        $scope.doTheBack = function() {
        	 window.history.back();
        };
        	
	    	
    });