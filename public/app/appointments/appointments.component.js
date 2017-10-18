'use strict';

angular.module('appointmentsModule', [])
    .component('appointmentsModule', {
        templateUrl:'/app/appointments/appointments.html',
        controller: function($scope,$http) {
        	console.log("Modulo appointments")
        }
 

})
.controller('AppointmentsController',function($scope, $http,){
	
	$http.get('/api/appointments').then(function(response) {
    	$scope.appointments = response.data; 
    	/*moment($scope.appointments).format('LLLL')= response.data;*/
    }); 
	
//	$http.get('/api/appointments' + $routeParams.fromdate + $routeParams.todate).then(function(response) {
//    	$scope.appointments = response.data;  
//    }); 
	console.log("inicializando el appointments...");
});