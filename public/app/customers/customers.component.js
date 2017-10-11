'use strict';

angular.module('customersModule')
    .component('customersModule', {
        templateUrl:'/app/customers/customers.html',
        controller: function($scope, $http) {
            $http.get('/api/customers').then(function(response) {
            	$scope.clients = response.data;
            	
            }); 
        	
        	
        	console.log("pepe")
        }
 
    });
