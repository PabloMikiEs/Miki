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
        	
			$scope.$on('appointments:showAppClick',(event, data) => 
					{ 
						console.log("appointments:showAppClick"); 
						$scope.$broadcast("appointments:showApp", data); 
					
					}
				);
        	
        }

    })
