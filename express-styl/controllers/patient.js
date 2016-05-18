var async = require('async');
var mongoose = require('mongoose');
var Patient = mongoose.model('Patient');

exports.create = function (req, res, callback){
	var patient = new Patient(req.body);
	patient.save(function (err){
		if (err) {
			res.send(500);
		} else {
			var msg = {
				success : true,
				message : 'Patient has been successfully added'
			};
        	if (callback) {
        		callback(msg)
        	} else {
        		res.send(JSON.stringify(msg));
        	}
		}
	});
};


exports.list = function (req, res, callback){
	var results = {
		counts : 0,
		success : true,
		data : []
	};
	Patient.find(function (err, collection){
		if (err) throw err;
		async.forEach(collection, function (item, cb){
			++results.counts;
			results.data.push(item);
			cb();
		}, function(err) {
			if (err) {
				results.success = false;
			}
	        if (callback) {
	        	callback(results);
	        } else {
	        	res.send(JSON.stringify(results));
	        }
	    });
	});
};