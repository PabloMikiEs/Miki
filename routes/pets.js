var express = require('express');
var router = express.Router();

/* Sample REST service  (placeholder) 
router.get('/customers', function(req, res, next) {
  res.json({ok:"ok"})
});
*/

const Pets = require('../models/pet');
router.get('/pets',(req, res)=> {
	Pets.find({}, (err, Pets)=> {
	res.json(Pets);
   });
});

router.get('/pets/:id',(req, res)=> {
	Customer.findById({_id:req.params.id}, (err, Customer)=> {
		res.json(Customer);
	});
});

router.post('/pets', (req, res) => {
	   var pet = new Customer(req.body);


	   /*console.log("DNI", req.body.dni)
	   console.log("Customer", customer);*/
	   
	   pet.save((err) => {
			if (err) {
				console.error(err);
				res.status(500).send(err);//KO
			} else {
				res.json(pet);
			}
		}) ;   
});
	

module.exports = router;







