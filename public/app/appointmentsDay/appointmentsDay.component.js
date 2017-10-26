'use strict';

angular.module('appointmentsDayModule', [])
    .component('appointmentsDayModule', {
        templateUrl:'/app/appointmentsDay/appointmentsday.html',
        controller: function ($scope, $http, $routeParams) {
        	console.log("Modulo Cita del día")
        	
        	var day = moment().startOf('day');
        	if ($routeParams.day) {
        		day = moment.utc($routeParams.day,"YYYYMMDD");
        	}
        	
        	$scope.day = day;
        	$scope.dia = moment(day).format('dddd DD MMMM YYYY');
        	$scope.dayD = moment(day).format('YYYYMMDD'); 
        	$scope.timetable = [];
        	
        	var fromDate = day.format("YYYYMMDD");
        	var toDate = moment(day).add(1, "days").format("YYYYMMDD");
        	
        	
        	$http.get("/api/appointments/" + fromDate + "/" + toDate).then(function(res){
        		
        		//$scope.appoint = res.data ? res.data[fromDate] : {};
        		$scope.appoint = res.data[fromDate] || {};
            	
        		
        		
                var open = moment(day).hour(9);
                var close = moment(day).hour(21);
                for(var hour = moment(open); hour.isBefore(close); hour.add(0.5, 'h')) {
                    var horita = hour.format('HH:mm');
                    $scope.timetable.push({
                        hour: horita,
                        appoints: $scope.appoint[horita]
                    });
                }          	
 
              
          	});	
        	
        	
         
        	$scope.doTheBack = function() {
        		  window.history.back();
        		};

        	
       }
    });