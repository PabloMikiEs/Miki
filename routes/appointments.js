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
	Appointment.findById({_id:req.params.id}, (err, Appointment)=> {
		res.json(Appointment);
	});
});


router.get('/appointments/:fromdate/:todate',(req, res)=> {
	var fechaInicio = moment(req.params.fromdate,'YYYYMM');
	var fechaFin = moment(req.params.todate,'YYYYMM');
	
	console.log("fechas..");
	Appointment.find({ "dateHourStart": { $gte:fechaInicio, $lt:fechaFin } }, (err, appointments)=> {
        if (err) {
            res.json({ success: false, message: err });
        } else {
        	var resultado = appointments.reduce(function (element) {
 
//        		if(Array.isArray(appointments)){element = element.concat(appointments)}else{acc.push(appointments)}
//            	}
        		
        		
        	});
            //res.json(resultado);
        	res.json(appointments);
        }
        	 
        
	}).populate({
		path: 'petID', 
		select: 'name specie', 
		populate: 
			{ 	
				path: 'ownerId' , 
				select: 'firstName' 
			}
	})
	
});

//router.get('/appointments/:month', (req, res) => {
//	var fechaInicio = moment(req.params.month,'YYYYMM'); 
//	
//	Appointment.find({"dateHourStart": fechaInicio}, (err, appointments)=> {
//        if (err) {
//            res.json({ success: false, message: err });
//        } else {
//        	Appointment.populate(appointments, { path: 'petID', select: 'name specie', populate: { path: 'ownerId' , select: 'firstName' }}, function (err,appointments) {
//        		if (err) {
//        			console.error(err);
//        		} else {
//        			res.json(appointments);
//        		}
//        	}); 
//        }
//	});
//
//});


module.exports = router;







