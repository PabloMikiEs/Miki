var express = require('express');
var router = express.Router();
const Appointment = require('../models/appointment');
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
	Appointment.find({ "dateHour": { $gte:fechaInicio, $lt:fechaFin } }, (err, Appointment)=> {
		res.json(Appointment);
	});
});

module.exports = router;







