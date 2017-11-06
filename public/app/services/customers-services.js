'use strict';


// Usando $resource en lugar de $http

angular.module('customersServices', [])
	.factory('customersServices', function($resource, $http, $q){
	    var customerResource = $resource('/api/customers/:id', {id: '@id'}, {
	        update: { method:'put'},
	    });
	    
	    customerResource.getPetsForCustomer = function(id) {
	    	return $http.get("/api/customers/" + id + "/pets");
	    }
	    
	    return customerResource;
	});