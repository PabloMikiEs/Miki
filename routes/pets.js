var express = require('express');
var router = express.Router(); 
const Pets = require('../models/pet');
const Customer = require('../models/customer');

router.get('/pets',(req, res)=> {
	Pets.find({}, (err, Pets)=> {
	res.json(Pets);
   });
});

router.get('/pets/:id',(req, res)=> {
	Pets.findById({_id:req.params.id}, (err, Pets)=> {
		res.json(Pets);
	});
});

 

router.post('/pets', (req, res) => {
	   var pets = new Pets(req.body);
	   
	   pets.save((err) => {
			if (err) {
				console.error(err);
				res.status(500).send(err);//KO
			} else {
				res.json(pets);
			}
		}) ;   
});

router.put('/pets/:id', (req, res, next) => {
	Pets.findOne({_id : req.params.id }, function(err, pets) {
		if (err) {
			return res.send(err);
		}

		// rellenamos los datos que vienen en la peticion
		for(prop in req.body){
			pets[prop] = req.body[prop];
		}
		
		console.log("Actualizando pets", pets);

		// save
		pets.save(function(err) {
			if (err) {
				console.error(err);
				res.sendStatus(500); 
			} else {
				res.json(pets);
			}
		});
	});
});

router.delete('/pets/:id',function(req, res) {
	console.log("/pets/" + req.params.id);
	// borrado -->  model.findByIdAndRemove(req.params.id, function(err)....
	Pets.findByIdAndRemove(req.params.id, function(err, pets) {
		if (err) {
			console.error(err);
			res.sendStatus(500); 
		} else {
			res.sendStatus(200);
		}
	});
});

module.exports = router;




