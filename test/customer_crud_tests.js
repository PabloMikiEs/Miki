const Customer = require('../models/customer');

var sampleCustomer = {
		"dni": "rrrrrr",
		"firstName": "pedro",
		"lastName": "gonzalez",
		"phone": "r",
		"email": "pedro@gonzalez.com",
		"note": "drrr",
	};

function testInsertCustomer() {
	const customer = new Customer(sampleCustomer);
	customer.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsertCustomer", customer);
		}
	})
}


testInsertCustomer();
