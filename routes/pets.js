var express = require('express');
var router = express.Router(); 
const Pets = require('../models/pet');

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



router.post('/pets', (req, res) => {
	   var pet = new Pet (req.body);
 
	   pet.save((err) => {
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
		
//		const validationErrors = Validators.validatepet(pet);
//		if(validationErrors) {
//			return res.status(400).send(validationErrors);
//		}

		// save
		pets.save(function(err) {
			if (err) {
				console.error(err);
				res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
			} else {
				res.json(pets);
			}
		});
	});
});

module.exports = router;




