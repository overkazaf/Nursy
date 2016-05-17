var mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
	//doc_id : String,
	username : String,
	password : String,
	email : String,
	name : String,
	created_by : String,
	created_date : Date
});


mongoose.model('Doctor', doctorSchema);