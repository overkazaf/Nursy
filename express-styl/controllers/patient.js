var async = require('async');
var mongoose = require('mongoose');
var Patient = mongoose.model('Patient');

exports.load = function (req, res, callback) {
	Patient.findOne({'_id':req.params.id}, function (err, data){
		if (err) throw err;
		if (callback) {
			callback(data);
		} else {
			res.send(JSON.stringify(data));
		}
	});
}

exports.get = function (req, res, callback){
	var name = req.params.name;
	var result = {
		success : true,
		message : 'Successfully destoried the record',
		data : []
	};

	if (!!name) {
		var condition = new RegExp(name, 'gi');
		Patient.find({'name': condition}, function (err, collection){
			if (err) {
				result.success = false;
				result.message = "error";
			} else {
				collection.sort(function (a, b){
					return new Date(b['visit_date']).getTime() - new Date(a['visit_date']).getTime();
				});
				async.forEach(collection, function (item, cb){
					result.data.push(item);
					cb();
				});
			}

			if (callback) {
				callback(result);
			}
		});
	} else {
		Patient.find(function (err, collection){
			if (err) {
				result.success = false;
				result.message = "error";
			} else {
				async.forEach(collection, function (item, cb){
					result.data.push(item);
					cb();
				});
			}

			if (callback) {
				callback(result);
			}
		});
	}
	
};

exports.create = function (req, res, callback){
	var patient = new Patient(req.body);
	patient.save(function (err){
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
        		Patient.find(function (err, collection){
					if (err) throw err;
					async.forEach(collection, function (item, cb){
						results.data.push(item);
						cb();
					}, function(err) {
						if (err) {
							results.success = false;
						}
				        callback(results);
				    });
				});
        	}
		}
	});
};

exports.destroy = function (req, res, callback){
	var id = req.params.id;
	var result = {
		success : true,
		message : 'Successfully destoried the record'
	};
	Patient.findOne({'_id':id}, function (err, collection){
		collection.remove(function (err){
			if (err) {
				result.success = false;
				result.message = 'Cannot destory entity';
			} else {
				if (callback) {
					callback(result);
				}
			}
		});
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
				result.success = false;
			}
	        if (callback) {
	        	callback(results);
	        } else {
	        	res.send(JSON.stringify(results));
	        }
	    });
	});
};