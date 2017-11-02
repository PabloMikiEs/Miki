'use strict';

angular.module('customersModule')
    .component('customersModule', {
        templateUrl:'/app/customers/customers.html',
        controller: function($scope,$http ) {
        	console.log("Api customers")
        }
 
    })
    .controller('ClientsController',function($scope, $http, $location, $routeParams, customersServices){
        console.log("Cargamos la lista de clientes");
    	$scope.clients = [];
		$scope.clients = customersServices.query();
    });
 