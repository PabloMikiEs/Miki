
const mongoose = require ('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({ 
	dateHourStart: {type : Date, required : true},
    dateHourEnd:  {type : Date, required : true},
	petID : {type: Schema.ObjectId, ref: "Pet", required: true},
	status : {type : String, required : true}
});

module.exports = mongoose.model('appointment',appointmentSchema);
 


