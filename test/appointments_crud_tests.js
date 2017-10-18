const Appointment = require('../models/appointment');

// Creamos uns citas para hacer test
var appointment1  = new Appointment({
	"dateHour" : "2017-10-18T10:00:00.197Z",
	"petID" : "59e0b02bd49a122348b5bff4",
	"status" : "1"
}); 
var appointment2  = new Appointment({
	"dateHour" : "2017-10-17T10:30:00.197Z",
	"petID" : "59e5dc0108e9fd1c18993091",
	"status" : "2"
}); 
var appointment3  = new Appointment({
	"dateHour" : "2017-10-18T10:30:00.197Z",
	"petID" : "59e0b02bd49a122348b5bff4",
	"status" : "3"
});
var appointment4  = new Appointment({
	"dateHour" : "2017-10-17T10:30:00.197Z",
	"petID" : "59e5dc0108e9fd1c18993091",
	"status" : "2"
}); 


function testInsertAppointment() {
	const appointment = new Appointment(appointment4);
	appointment.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsertAppointment", appointment);
		}
	})
}

//function testSearchCustomers() {
//	var search = {};
//	var regexp = new RegExp("gonzalez", "i")
//	search.firstName = regexp;
//	search.lastName = regexp;
//	console.log("Search customers:", search);
//	
//	Customer.find(search, (err, customers) => {
//		if (err) {
//			console.error(err);
//		} else {
//			console.log("testSearchCustomers", customers);
//		}
//	}).sort({'_id' : -1});
//}

testInsertAppointment();
//testSearchAppointment();
