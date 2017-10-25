var express = require('express');
var router = express.Router();
const Appointment = require('../models/appointment');
const Customer = require('../models/customer');
const Pet = require('../models/pet');
var moment = require('moment');


router.get('/appointments',(req, res)=> { 
	Appointment.find({}, (err, Appointment)=> {
	res.json(Appointment); 
   });
});

router.get('/appointments/:id',(req, res)=> {
	Appointment.findById({_id:req.params.id}, (err, Appointments)=> {
		res.json(Appointments);
	}).populate({
		path: 'petID', 
		model: 'Pet',
		populate: 
			{ 	
				path: 'ownerId', 
				model: 'Customer'
			}
	});
});

router.get('/appointments/:fromdate/:todate',(req, res)=> {
    var fechaInicio = moment(req.params.fromdate,'YYYYMMDD');
    var fechaFin = moment(req.params.todate,'YYYYMMDD');
    
    Appointment.find({ "dateHourStart": { $gte:fechaInicio, $lt:fechaFin } }, (err, appointments)=> {
		if (err) {
			console.error(err);
			return res.sendStatus(500); 
		}
		
        var appointmentsByDate = appointments.reduce(function(appointmentsByDate, item){
            var date = moment(item.dateHourStart).format('YYYYMMDD');
            var time = moment(item.dateHourStart).format('hh:mm');
            if(appointmentsByDate[date] == undefined) {
            	appointmentsByDate[date] = {};
            }
            if(appointmentsByDate[date][time] == undefined) {
            	appointmentsByDate[date][time] = item;
            }
            
            return appointmentsByDate;
        }, {});
		
        res.json(appointmentsByDate);

	}).populate({
		path: 'petID', 
		select: 'name specie', 
		populate: 
			{ 	
				path: 'ownerId' , 
				select: 'firstName' 
			}
	}
    ).sort({'dateTimeStart': 1})	
	
});

module.exports = router;






