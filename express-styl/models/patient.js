var mongoose = require('mongoose');
var DeseaseType = mongoose.model('DeseaseType');

var patientSchema = new mongoose.Schema({
	//pat_id : String,
	patient_id : String,
	name : String,
	gender : String,
	age : Number,
	birthday : Date,
	phone : String,
	person_id : String,
	visit_date : String,
	detail : String,
	desease_type : String,
	created_by : String,
	created_date : Date
});


mongoose.model('Patient', patientSchema);