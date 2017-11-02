'use strict';

angular.module('customersService', [])
	.factory('customersService', function($resource, $http, $q){
	    var customerResource = $resource('/api/customers/:id', {id: '@id'}, {
	        update: { method:'put'},
	    });
	    
	    customerResource.getPetsForCustomer = function(id) {
	    	return $http.get("/api/customers/" + id + "/pets");
	    }
	    
	    return customerResource;
	});