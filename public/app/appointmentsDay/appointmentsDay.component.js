'use strict';

angular.module('appointmentsDayModule', [])
    .component('appointmentsDayrModule', {
        templateUrl:'/app/appointmentsDay/appointmentsday.html',
        controller: function ($scope, $http, $routeParams) {
        	 
        	             console.log("Componente appointments day");
        	 
        	            if ($routeParams.date) {
        	 
        	                 var date = moment($routeParams.date, 'YYYYMM');
        	                 $scope.year = moment(date).format('YYYY');
        	                 $scope.month = moment(date).format('MMMM').toUpperCase();
        	                 date = moment(date).format('YYYYMM');
        	 
        	             } else {
        	 
        	                 date = moment().startOf('month').format('YYYYMM');
        	                 $scope.month = moment().startOf('month').format('MMMM').toUpperCase();
        	               $scope.year = moment().startOf('month').format('YYYY');
        	 
        	            }
        	        }
        	    });