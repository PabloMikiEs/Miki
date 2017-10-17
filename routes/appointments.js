var express = require('express');
var router = express.Router();
const Appointment = require('../models/appointment');



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



module.exports = router;







