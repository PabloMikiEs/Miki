'use strict';

angular.module('appointmentDetailModule', ["ngRoute"])
    .component('appointmentDetailModule', {
        templateUrl:'/app/appointments/appointmentDetail/appointment-detail.html',
        controller: function($scope,$http,$routeParams) {
        	console.log("Inicializando appointmentModule ...");
        }

    })
    .controller('appointmentController',function($scope, $http,/* $location,$routeParams*/ ){
 
    	console.log("inicializando el appointmentDetailsController...");
    	$http.get("/api/pets").then(function(response) {
    		$scope.pets = response.data;
    	});
    	
    	$scope.$on('appointments:showApp',(event, data) => { 
    		if (data.id){
        		$http.get("/api/appointments/" + data.id).then(function(response) { 
    	    		$scope.appointment = response.data;
    	    		console.log("Response /api/appointments/" + data.id);
    	    	}); 
        		
    		}
        	else {
        		$scope.appointment = {};
        		console.log("New Appointment", data.datetime);
        		$scope.appointment.dateHourStart = moment(data.datetime, 'YYYYMMDDHH:mm').toDate();
        		$scope.appointment.dateHourEnd = moment($scope.appointment.dateHourStart).add(30,'m').toDate();
        		$scope.appointment.status = 0;		
        	}
    	});
 
    	
    	$scope.submit = function() {
    		console.log("Insert appointment:", $scope.appointment);
    		$http.post("/api/appointments/", $scope.appointment).then(function(response){
    			$scope.appointment = response.data;
    		});
    		$scope.$emit("appointments:appSave",$scope.appointment)
    	}
    	
      	
    	$scope.edit = function() {
    		console.log("Update Appointment:", $scope.appointment);
    		$http.put("/api/appointments/" + $scope.appointment._id, $scope.appointment).then(
    				function(response){
		    			$scope.appointment = response.data;
		    			$scope.$emit("appointments:appSave",$scope.appointment)
    		});
    	}
    	
    	$scope.delete = function() { 
    		var aux = $scope.appointment;
    		$http.delete("/api/appointments/" + $scope.appointment._id, $scope.appointment).then(
					function(response) {
						$scope.appointment = response.data; 
						$scope.$emit("appointments:appDelete",aux) 
					}, function() {
						alert("Ha fallado el borrado!");
					});
    	}

	    	
    });