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
    	
	    	
    	if ($routeParams.id){
    		$http.get("/api/appointments/" + $routeParams.id).then(function(response) { 
	    		$scope.appointment = response.data;
	    		console.log("Response /api/appointments/" + $routeParams.id);
	    	}); 
    		
    	}
    	else {
    		$scope.appointment = {};
    		console.log("New Appointment", $routeParams.datetime);
    		$scope.appointment.dateHourStart = moment($routeParams.datetime, 'YYYYMMDDhh:mm').toDate();
    		$scope.appointment.dateHourEnd = moment($scope.appointment.dateTimeStart).add(30,'m').toDate();
    		$scope.appointment.status = 0;
    		
    		
    	}

//    	if ($routeParams.datetime){
//    		$http.get("/api/appointments/" + $routeParams.id).then(function(response) { 
//	    		$scope.appointment = response.data;
//	    		console.log("Response /api/appointments/" + $routeParams.id);
//	    	}); 
//    		
//    	}
//    	else {
//    		$scope.appointment = {};
//    	}
      	
      	
      	
	    	
	    // Para regresar a la vista anterior
        $scope.doTheBack = function() {
        	 window.history.back();
        };
        	
	    	
    });