var mongoose = require('mongoose');

var deseaseTypeSchema = new mongoose.Schema({
	//des_id : String,
	desease_name : String,
	created_by : String,
	created_date : Date
});


mongoose.model('DeseaseType', deseaseTypeSchema);