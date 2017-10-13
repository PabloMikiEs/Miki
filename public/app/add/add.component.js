'use strict';

angular.module('addModule', [])
    .component('addModule', {
        templateUrl:'/app/add/add.html',
        controller: function($scope,$http) {
            $http.get('/api/add').then(function(response) {
            	$scope.client = response.data;
            }); 
        	console.log("ana")
        }

    });
