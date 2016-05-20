var async = require('async');
var mongoose = require('mongoose');
var Doctor = mongoose.model('Doctor');

exports.load = function (req, res, callback) {
	
}

exports.get = function (req, res, callback){
	var username = req.body.username;

	Doctor.find({'username':username}, function (err, collection) {
		callback(collection);
	})
	
};

exports.create = function (req, res, callback){
	var doctor = new Doctor(req.body);
	console.log('doctor', doctor);
	doctor.save(function (err){
		if (err) {
			res.send(500);
		} else {
			var results = {
				success : true,
				message : 'Patient has been successfully added',
				data : []
			};
        	if (!callback) {
        		res.send(JSON.stringify(results));
        	} else {
        		callback(results);
        	}
		}
	});
};

exports.destroy = function (req, res, callback){
	var username = req.params.username;
	var result = {
		success : true,
		message : 'Successfully destoried the record'
	};
	Doctor.find({'username':username}, function (err, collection){
		async.forEach(collection, function (item){
			item.remove(function (err){
				if (err) {
					result.success = false;
					result.message = 'Cannot destroy entity';
				}
			});
		});

		if (callback) {
			callback(result);
		}
	});
};
