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
    		$scope.appointment.dateHourStart = moment($routeParams.datetime, 'YYYYMMDDHH:mm').toDate();
    		$scope.appointment.dateHourEnd = moment($scope.appointment.dateHourStart).add(30,'m').toDate();
    		$scope.appointment.status = 0;
    		
    		
    	}
    	$http.get("/api/pets").then(function(response) {
    		$scope.pets = response.data;
    	});

    	
    	$scope.submit = function() {
    		console.log("Insert appointment:", $scope.appointment);
    		$http.post("/api/appointments/", $scope.appointment).then(function(response){
    			$scope.appointment = response.data;
    			alert("Appointment creada");

				history.back();
    		});
    	}
    	
      	
    	$scope.edit = function() {
    		console.log("Update Appointment:", $scope.appointment);
    		$http.put("/api/appointments/" + $scope.appointment._id, $scope.appointment).then(function(response){
    			$scope.appointment = response.data;
    			alert("Appointment actualizada");
				history.back();
    		});
    	}
    	
    	$scope.delete = function() { 
    		$http.delete("/api/appointments/" + $scope.appointment._id, $scope.appointment).then(
					function(response) {
						alert("Cita borrada");
						$scope.appointment = response.data;
						history.back();
					}, function() {
						alert("Ha fallado el borrado!");
						history.back();
					});
    	}
	    	
	    // Para regresar a la vista anterior
        $scope.doTheBack = function() {
        	 window.history.back();
        };
        	
	    	
    });