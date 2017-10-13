var express = require('express');
var router = express.Router();

/* Sample REST service  (placeholder) 
router.get('/customers', function(req, res, next) {
  res.json({ok:"ok"})
});
*/

const Customer = require('../models/customer');
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

router.post('/customers', (req, res) => {
	   var customer = new Customer();
	   customer.dni = req.body.dni;
	   customer.firstName = req.body.firstName;
	   customer.lastName = req.body.lastName;
	   customer.phone = req.body.phone;
	   customer.mail = req.body.mail;
	   customer.note = req.body.note;
	   
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
	

module.exports = router;







