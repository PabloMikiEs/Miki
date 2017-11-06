'use strict';

angular.module('petsModule', [])
    .component('petsModule', {
        templateUrl:'/app/pets/pets.html',
        controller: function($scope,$http) {
            $http.get('/api/pets').then(function(response) {
            	$scope.pets = response.data;
            }); 
        	console.log("Modulo mascotas")
        }

    });