var async = require('async');
var mongoose = require('mongoose');
var Patient = mongoose.model('Patient');

exports.create = function (req, res){
	console.log('req.body', req.body);
	var patient = new Patient(req.body);
	patient.save(function (err){
		if (err) res.send(500);
		else {
			var msg = {
				success : true,
				message : 'Patient has been successfully added'
			};
        	res.send(JSON.stringify(msg));
		}
	});
};


exports.list = function (req, res){
	var results = {
		counts : 0,
		success : true,
		data : []
	};
	Patient.find(function (err, collection){
		if (err) throw err;
		async.forEach(collection, function (item, callback){
			++results.counts;
			results.data.push(item);
			callback();
		}, function(err) {
			if (err) {
				results.success = false;
			}
	        res.send(JSON.stringify(results));
	    });
	});
};