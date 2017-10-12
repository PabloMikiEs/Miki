'use strict';

angular.module('addModule', [])
    .component('addModule', {
        templateUrl:'/app/add/add.html',
        controller: function($scope,$http,$routeParams) {
            $http.get('/API/customer/' + $routeParams.id).then(function(response) {
            	$scope.client = response.data;
            }); 
            
        	console.log("ana")
        }

    });
