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

router.get('/customer/:id',(req, res)=> {
	Customer.findById({_id:req.params.id}, (err, Customer)=> {
		res.json(Customer);
	});
});


module.exports = router;







