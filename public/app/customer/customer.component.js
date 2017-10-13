'use strict';

angular.module('customerModule', ["ngRoute"])
    .component('customerModule', {
        templateUrl:'/app/customer/customer.html',
        controller: function($scope,$http,$routeParams) {
        	console.log("Inicializando customerModule ...");
        }

    })
    .controller('CustomerController',function($scope, $http, $location, $routeParams){
    	const id = $routeParams.id;
    	$http.get("/api/customers/" + id).then(function(response){
    		$scope.customer = response.data;
    	});
    	
    	$scope.submit = function(){
    		console.log("Guardando customer...");
    		console.log("IsNotNew?", $scope.customer._id == 'undefined');
    		$http.post("/api/customers/", $scope.customer).then(function(response) {
    			console.log("Customer guardado", response.data);
    			$scope.customer = response.data;
    		});
    	}
    });
