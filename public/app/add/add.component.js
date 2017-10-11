'use strict';

angular.module('addModule', ["ngRoute"])
    .component('addModule', {
        templateUrl:'/app/customer/customer.html',
        controller: function($scope,$http,$routeParams) {
            $http.get('/API/customer/' + $routeParams.id).then(function(response) {
            	$scope.client = response.data;
            }); 
            
        	console.log("juan")
        }

    });
