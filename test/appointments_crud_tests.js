const Appointment = require('../models/appointment');

// Creamos uns citas para hacer test
var appointment1  = new Appointment({
	"dateHourStart" : "2017-10-18T10:00:00.197Z",
	"dateHourEnd" : "2017-10-18T10:30:00.197Z",
	"ownerID" : "59dc7a8069107018902e79c7",
	"petID" : "59e0b02bd49a122348b5bff4",
	"status" : "1"
}); 
var appointment2  = new Appointment({
	"dateHourStart" : "2017-10-17T09:30:00.197Z",
	"dateHourEnd" : "2017-10-17T10:00:00.197Z",
	"ownerID" : "59dc7a8069107018902e79c7",
	"petID" : "59e5dc0108e9fd1c18993091",
	"status" : "2"
}); 
var appointment3  = new Appointment({
	"dateHourStart" : "2017-10-18T10:30:00.197Z",
	"dateHourEnd" : "2017-10-18T11:00:00.197Z",
	"ownerID" : "59dc7a8069107018902e79c7",
	"petID" : "59e0b02bd49a122348b5bff4",
	"status" : "3"
});
var appointment4  = new Appointment({
	"dateHourStart" : "2017-09-16T16:30:00.197Z",
	"dateHourEnd" : "2017-09-16T17:00:00.197Z",
    "ownerID" : "59dc7a8069107018902e79c7",
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
