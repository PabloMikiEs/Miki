'use strict';

angular.module('customersService', []).factory('customersService', function($http, $q){
    
	var service = {};
	
	service.getCustomers = () => {
		var d = $q.defer();
    	$http.get("/api/customers")
    		.success( function(response) {
    			d.resolve(response);
	    	})
	    	.error(function(err) {
				d.reject(err)
			});
    	return d.promise;
 	
	}
	service.getCustomersById = (id) => {
		var d = $q.defer();
    	$http.get("/api/customers/"+id)
    		.success( function(response) {
    			d.resolve(response);
	    	})
	    	.error(function(err) {
				d.reject(err)
			});
    	return d.promise;
 	
	}
	
	service.newCustomer = (body) =>{
		var d = $q.defer();
    	$http.post("/api/customers",body)
    		.success( function(response) {
    			d.resolve(response);
	    	})
	    	.error(function(err) {
				d.reject(err)
			});
    	return d.promise;
	}
	
	service.updateCustomer = (id,body) =>{
		var d = $q.defer();
    	$http.put("/api/customers/"+id,body)
    		.success( function(response) {
    			d.resolve(response);
	    	})
	    	.error(function(err) {
				d.reject(err)
			});
    	return d.promise;
	}
	service.removeCustomer = (id) =>{
		var d = $q.defer();
    	$http.delete("/api/customerDel/"+id)
    		.success( function(response) {
    			d.resolve(response);
	    	})
	    	.error(function(err) {
				d.reject(err)
			});
    	return d.promise;
	}
	
	
	
	return service;
	/*
	return $resource('/api/customers', {
        update: { method:'GET'}
    })	*/
});