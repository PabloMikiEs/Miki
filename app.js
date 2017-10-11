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
//require('./test/customer_crud_tests.js');


//Front End
app.all("*", (req, res) => {
res.sendFile(path.resolve("public/index.html"));
})



module.exports = app;


//PRUEBA

/*const Customer = require('./models/customer');
const customer1 = new Customer({
	"dni": "4236326",
	"firstName": "Rosalia",
	"lastName": "Suarez",
	"phone": "656879876",
	"email": "rosalia@gmail.com",
	"note": "Loren ipsum ",
}); 
customer1.save((err) => {
       if (err) {
           console.log(err);
       } else {
           console.log(customer);
       }
   })
*/
