'use strict';

angular.module('customerModule', ["ngRoute"])
    .component('customerModule', {
        templateUrl:'/app/customer/customer.html',
        controller: function($scope,$http,$routeParams) {
            $http.get('/API/customer/' + $routeParams.id).then(function(response) {
            	$scope.client = response.data;
            }); 
            
        	console.log("juan")
        }

    });
