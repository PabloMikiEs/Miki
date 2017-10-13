var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var sample = require('./routes/sample');
//var customer2 = require('./routes/customers');


// añadir conexión a mongoose
var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/petStore' , {useMongoClient:true});


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//// Nuevas Rutas van aqui:
app.use('/api', require('./routes/customers')); //todo lo que empiece por api está delegado en customer
app.use('/api', require('./routes/pets'));
//require('./test/customer_crud_tests.js');


//Front End
app.all("*", (req, res) => {
res.sendFile(path.resolve("public/index.html"));
})



module.exports = app;


//PRUEBA

/*const Customer = require('./models/customer');
const customer = new Customer({
	"dni": "32841697",
	"firstName": "Miki",
	"lastName": "Lopez",
	"phone": "657329812",
	"email": "miki@gmail.com",
	"note": "Etiam ac leo leo. Sed ut nibh a lacus efficitur hendrerit at eget leo. Vestibulum blandit vel neque eu luctus. Duis at finibus felis. Suspendisse sed elit hendrerit purus dictum efficitur rutrum a dui. Duis sit amet nisi tincidunt elit molestie molestie sit amet at nunc. Morbi non elit placerat, eleifend neque ac, ultrices mi.",
}); 
customer.save((err) => {
       if (err) {
           console.log(err);
       } else {
           console.log(customer);
       }
   })
*/

/*const Pets = require('./models/pet');
const pet  = new Pets({
	"name": "Sasha",
	"birthdate":"2014-02-01",
	"chipNumber": "Lopez",
	"specie": "657329812",
	"race": "miki@gmail.com",
	"description": "Etiam ac leo leo. Sed ut nibh a lacus efficitur hendrerit at eget leo. Vestibulum blandit vel neque eu luctus. Duis at finibus felis. Suspendisse sed elit hendrerit purus dictum efficitur rutrum a dui. Duis sit amet nisi tincidunt elit molestie molestie sit amet at nunc. Morbi non elit placerat, eleifend neque ac, ultrices mi.",
	"photoUrl": "Etiam ac leo leo. Sed ut nibh a lacus efficitur hendrerit at eget leo. Vestibulum blandit vel neque eu luctus. Duis at finibus felis. Suspendisse sed elit hendrerit purus dictum efficitur rutrum a dui. Duis sit amet nisi tincidunt elit molestie molestie sit amet at nunc. Morbi non elit placerat, eleifend neque ac, ultrices mi.",
	"ownerId": "59dc7a8069107018902e79c7"
}); 
pet.save((err) => {
       if (err) {
           console.log(err);
       } else {
           console.log(pet);
       }
   })*/



