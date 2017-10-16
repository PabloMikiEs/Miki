var express = require('express');
var router = express.Router();
const Customer = require('../models/customer');
const Pets = require('../models/pet');

/* Sample REST service  (placeholder) 
router.get('/customers', function(req, res, next) {
  res.json({ok:"ok"})
});
*/


router.get('/customers',(req, res)=> {
	Customer.find({}, (err, Customer)=> {
	res.json(Customer);
   });
});

router.get('/customers/:id',(req, res)=> {
	Customer.findById({_id:req.params.id}, (err, Customer)=> {
		res.json(Customer);
	});
});

router.get('/customers/:id/pets', function(req, res) {
	Pets.find({ownerId: req.params.id}, function(err, pets) {
		if (err) {
			console.error(err);
			res.sendStatus(500); 
		} else {
			res.json(pets);
		}
	});
});

router.post('/customers', (req, res) => {
	   var customer = new Customer(req.body);
	  // como pasmos el req.body por Customer no hace falta rellenar esto
	   /*customer.dni = req.body.dni;
	   customer.firstName = req.body.firstName;
	   customer.lastName = req.body.lastName;
	   customer.phone = req.body.phone;
	   customer.mail = req.body.mail;
	   customer.note = req.body.note;*/
	   
	   /*console.log("DNI", req.body.dni)
	   console.log("Customer", customer);*/
	   
	   customer.save((err) => {
			if (err) {
				console.error(err);
				res.status(500).send(err);//KO
			} else {
				res.json(customer);
			}
		}) ;   
});

router.put('/customers/:id', (req, res, next) => {
	Customer.findOne({_id : req.params.id }, function(err, customer) {
		if (err) {
			return res.send(err);
		}

		// rellenamos los datos que vienen en la peticion
		for(prop in req.body){
			customer[prop] = req.body[prop];
		}
		
		console.log("Actualizando customer", customer);
		
//		const validationErrors = Validators.validateCustomer(customer);
//		if(validationErrors) {
//			return res.status(400).send(validationErrors);
//		}

		// save
		customer.save(function(err) {
			if (err) {
				console.error(err);
				res.sendStatus(500);//KO (TODO: elegir un codigo mas explicito)
			} else {
				res.json(customer);
			}
		});
	});
});



module.exports = router;







