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
	Appointment.findById({_id:req.params.id}, (err, appointments)=> {
		res.json(appointments);
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
            var time = moment(item.dateHourStart).format('HH:mm');
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

router.put('/appointments/:id', (req, res, next) => {
	Appointment.findOne({_id : req.params.id }, function(err, appointment) {
		if (err) {
			return res.send(err);
		}

		// rellenamos los datos que vienen en la peticion
		for(prop in req.body){
			appointment[prop] = req.body[prop];
		}
		
		console.log("Actualizando appointment", appointment);
		
		// save
		appointment.save(function(err) {
			if (err) {
				console.error(err);
				res.sendStatus(500);
			} else {
				res.json(appointment);
			}
		});
	});
});

router.post('/appointments', (req, res) => {
	   var appointment = new Appointment(req.body);
	   appointment.save((err) => {
			if (err) {
				console.error(err);
				res.status(500).send(err);//KO
			} else {
				res.json(appointment);
			}
		}) ;   
});

router.delete('/appointments/:id',function(req, res) {
	console.log("/appointments/" + req.params.id); 
	Appointment.findByIdAndRemove(req.params.id, function(err, pets) {
		if (err) {
			console.error(err);
			res.sendStatus(500); 
		} else {
			res.sendStatus(200);
		}
	});
});
module.exports = router;






