var express = require('express');
var router = express.Router();

/* Sample REST service  (placeholder) */
router.get('/customers', function(req, res, next) {
  res.json({ok:"ok"})
});

const Customer = require('../models/customer');
router.get('/customer',(req, res)=> {
	Customer.find({}, (err, Customer)=> {
	res.json(Customer);
   });
});
module.exports = router;







