var mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
	//doc_id : String,
	username : String,
	password : String,
	email : String,
	phone : String,
	name : String,
	created_by : String,
	created_date : String
});


mongoose.model('Doctor', doctorSchema);