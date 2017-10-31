'use strict';

angular.module('appointmentsDayModule', [])
    .component('appointmentsDayModule', {
        templateUrl:'/app/appointments/appointmentsDay/appointmentsday.html',
        bindings : {
        	currentDate: '='
        },
        controller: function ($scope, $http/*, $routeParams*/) {
        	console.log("Modulo Cita del día")
       
        	
        	this.$onInit = function () {
        		console.log ("appointmentsDayList->$onInit")
        		console.log ("currentDate",this.currentDate)
        		var currentDate = moment(this.currentDate,"YYYYMMDD")
        		$scope.currentDate = moment(this.currentDate,"YYYYMMDD")
        		loadAppointments(currentDate.toDate())
        	}
        	
        	$scope.$on('apppointments:loadApp',(event, data) => { 
        		console.log("apppointments:loadApp",data)
        		loadAppointments(data.currentDate)
        	});
        	
        	
        	function loadAppointments(currentDate){
        		
        		$scope.dia = moment(currentDate).format('dddd DD MMMM YYYY');
            	$scope.dayD = moment(currentDate).format('YYYYMMDD'); 
            	$scope.timetable = [];
            	
            	var fromDate = moment(currentDate).format("YYYYMMDD");
            	var toDate = moment(currentDate).add(1, "days").format("YYYYMMDD");
            	
            	$http.get("/api/appointments/" + fromDate + "/" + toDate).then(function(res){
            		$scope.appoint = res.data[fromDate] || {};
                    var open = moment(currentDate).hour(9);
                    var close = moment(currentDate).hour(21);
                    for(var hour = moment(open); hour.isBefore(close); hour.add(0.5, 'h')) {
                        var horita = hour.format('HH:mm');
                        $scope.timetable.push({
                            hour: horita,
                            appoints: $scope.appoint[horita]
                        });
                    }          	
              	});	
        	}
        	
        	
        	$scope.show = (id) => { 
        		console.log("estoy probando coger la id:" + id)
        		$scope.$emit("appointments:showAppClick", {id: id}); 	 
      		};
      		
      		$scope.aAppoint = (data) => {
      			console.log("estoy probando añadir una cita para las : " + data)
    			$scope.$emit("appointments:showAppClick", {datetime: data});		
        		  
      		};
         
        	$scope.doTheBack = function() {
        		  window.history.back();
        		};

        	
       }
    });