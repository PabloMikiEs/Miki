'use strict';

angular.module('appointmentsCalendarModule', [])
    .component('appointmentsCalendarModule', {
        templateUrl:'/app/appointmentsCalendar/appointmentsCalendar.html',
        controller: function($scope, $http, $routeParams, $location) {
        	moment.locale('es'); 
        	
        	// PRUEBA DE SOCKET IO 
//        	var socket = io.connect();
//        	socket.on('appointments:evento1', function(data) 
//        			{console.log("Recibido el evento appointments:evento1", data);
//        				// realizar operaciones relacionadas con este evento
//        			})
        	// hasta aqui prueba de socketio
        	
        			
        			
        	var month = moment().startOf('month');

        	if($routeParams.month){
        		month = moment($routeParams.month,"YYYYMM");
        	}
        	
        	$scope.actual = month.toDate();
        	$scope.previus = moment(month).add(-1,'M').format("YYYYMM");
        	$scope.next = moment(month).add(1,'M').format("YYYYMM");
        	var monthI =  moment(month.toDate()).format("YYYYMM");
        	var monthF = moment(month).add(1,'M').toDate();
        	
        	$scope.cells = []
        	
        	var rellenar = month.weekday();
        	for (var i=0; i < rellenar ; i++){
        		$scope.cells.push({});
        	}
        	
        	$http.get("/api/appointments/"+monthI+"/"+$scope.next).then(function(res){
        		
        		$scope.app = res.data;
        		
        		for(var actual = moment(month); actual.isBefore(monthF); actual.add(1,'days')){
        			
        			var dayf = actual.format("D");
        			var datef = actual.format("YYYYMMDD");
        			
        			$scope.cells.push({
        				date: dayf,
        				apps: $scope.app[datef],
        				contador: $scope.app[datef] ? Object.keys($scope.app[datef]).length : 0
        			});
        		}		

            	var dates = [];
                
            	for (var i = 0; i < $scope.cells.length; i++ ) {
                    if (i % 7 == 0) {
                    	dates.push([]);
                    }
                    dates[dates.length-1].push($scope.cells[i]);
                }
             
                return $scope.dates = dates;
          	});	
        	
        	$scope.doTheBack = function() {
      		  window.history.back();
      		};
        	
        }
    
    	

});