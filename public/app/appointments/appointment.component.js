'use strict';

angular.module('appointmentModule', ["ngRoute"])
    .component('appointmentModule', {
        templateUrl:'/app/appointments/appointment.html',
        controller: function($scope,$http,$routeParams) {
        	console.log("Inicializando modulo padre appointments ...") 
        	 
        	// Cogemos el día
        	var currentDate = moment.utc($routeParams.day,"YYYYMMDD");
        	$scope.currentDate = currentDate.format("YYYYMMDD");
        	
        	// Fin de coger el día
        	
			$scope.$on('appointments:showAppClick',(event, data) => { 
					console.log("appointments:showAppClick"); 
					$scope.$broadcast("appointments:showApp", data); 
			});
			
			$scope.$on("appointments:appSave", (event, data) => {
            	console.log("Cita añadida");
                $scope.$broadcast("apppointments:loadApp", {currentDate : data.dateHourStart});
            });
			
			$scope.$on("appointments:appDelete", (event, data) => {
            	console.log("Cita borrada");
                $scope.$broadcast("apppointments:loadApp", {currentDate : data.dateHourStart});
            });
			
        	
        }

    })
