'use strict';

angular.module('appointmentsModule', [])
    .component('appointmentsModule', {
        templateUrl:'/app/appointments/appointments.html',
        controller: function($scope,$http) {
            $http.get('/api/appointments').then(function(response) {
            	$scope.appointments = response.data;
            }); 
     
        	console.log("Modulo appointments")
        }

    });