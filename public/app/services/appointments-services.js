'use strict';

angular.module('appointmentsServices', []).factory('appointmentsServices', function($http, $q){
	var servicio = {};
	
	// cache local con las citas 
	servicio._appointmentsMapByMonth = {};
	 
	servicio.getMonthAppointmentsByDate = (month) => {
		var d = $q.defer();
		
        var startDate = moment(month).format('YYYYMMDD');
        var endDate = moment(month).add(1,'M').format('YYYYMMDD');

		// si ya tenemos los datos los usamos
		if(servicio._appointmentsMapByMonth[startDate]) {
			d.resolve(servicio._appointmentsMapByMonth[startDate]);
			return d.promise;
		}
		
		// Sino los cogemos en el servidor
		$http.get("/api/appointmentsByDate/" + startDate + "/"+ endDate)
			.success(function(response) {
				servicio._appointmentsMapByMonth[startDate] = response;
				d.resolve(servicio._appointmentsMapByMonth[startDate]);
			})
			.error(function(response) {
				d.reject({status: response.status, message: 'TODO'});
			});
		return d.promise;
	}
	
	/**
	 * Devuelve una promesa con el mapa de appointments de esta fecha indexados por [hora]
	 */
	servicio.getAppointmentsForDate = (date)  => {
		// fechas para calcular su posicion en el cache
		var month = moment(date).startOf('M');
		var monthKey = month.format('YYYYMMDD');
		var dateKey = moment(date).format('YYYYMMDD');
		
		var d = $q.defer();
				
		// si ya tenemos los datos los devolvemos
		if(servicio._appointmentsMapByMonth[monthKey]) {
			d.resolve(servicio._appointmentsMapByMonth[monthKey][dateKey]);
			return d.promise;
		}
		
		// en caso contrario llamamos a la carga de datos del mes
		servicio.getMonthAppointmentsByDate(month).then(
			function() {
				console.log("servicio._appointmentsMapByMonth[monthKey][dateKey]", servicio._appointmentsMapByMonth[monthKey][dateKey]);
				d.resolve(servicio._appointmentsMapByMonth[monthKey][dateKey]);
			},function(err) {
				d.reject(err)
			});
		return d.promise;
	}
	
	servicio.getAppointment = (id)  => {
		var d = $q.defer();
    	$http.get("/api/appointments/" + id)
    		.success( function(response) {
    			d.resolve(response);
	    	})
	    	.error(function(err) {
				d.reject(err)
			});
    	return d.promise;
	}
	
	servicio.saveAppointment = (appointment)  => {
		var d = $q.defer();

		var isNew = !appointment._id;
		var url = "/api/appointments" + (isNew? "" : "/" + appointment._id);
		$http.post(url, appointment)
			.success(function(appointment) {
				// guardamos el appointment en cache y lo devolvemos
				var dateTimeStart = moment(appointment.dateTimeStart);
				var monthKey = moment(dateTimeStart).startOf('M').format('YYYYMMDD');
				var dateKey = dateTimeStart.format('YYYYMMDD');;
				var timeKey = dateTimeStart.format('hh:mm');
				if(servicio._appointmentsMapByMonth[monthKey]) { // guardamos en cache si ya tenemos el mes en cache
					if(servicio._appointmentsMapByMonth[monthKey][dateKey] == undefined) {
						servicio._appointmentsMapByMonth[monthKey][dateKey] = {};
					}
					servicio._appointmentsMapByMonth[monthKey][dateKey][timeKey] = appointment;
				}
				
				d.resolve(appointment);
			})
			.error(function(err) {
				d.reject(err)
			});

		return d.promise;
	}

	servicio.deleteAppointment = (appointment)  => {
		var d = $q.defer();

		// fechas para calcular su posicion en el cache
 		var month = moment(appointment.dateTimeStart).startOf('M');
		var monthKey = month.format('YYYYMMDD');
		var dateKey = moment(appointment.dateTimeStart).format('YYYYMMDD');;
		var timeKey = moment(appointment.dateTimeStart).format('hh:mm');
		   			
		$http.delete("/api/appointments/" + appointment._id).then(
    		function(response) {
				if(servicio._appointmentsMapByMonth[monthKey]) { // lo borramos del cache
					if(servicio._appointmentsMapByMonth[monthKey][dateKey] == undefined) {
						servicio._appointmentsMapByMonth[monthKey][dateKey] = {};
					}
					servicio._appointmentsMapByMonth[monthKey][dateKey][timeKey] = undefined;
				}    			
    			d.resolve(0);
	    	}, 
	    	function(err) {
	    		d.reject(err);
			});

		return d.promise;
	}

	
	return servicio;
});