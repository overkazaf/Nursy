var async = require('async');
var util = require('../utils/util');
var mongoose = require('mongoose');
var DeseaseType = mongoose.model('DeseaseType');

exports.init = function (req, res) {
	DeseaseType.find(function (err, collections){
		if (!collections.length) {
			// 插入
			// 高血压、糖尿病、慢性肾炎、支气管哮喘、慢性阻塞性肺病、肝硬化、类风湿性关节炎、
			// 冠心病、肺结核、肾病综合症、风湿性心脏病、慢性肝炎
			var array = [
				{'deseaseName':'高血压', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'糖尿病', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'慢性肾炎', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'支气管哮喘', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'慢性阻塞性肺病', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'肝硬化', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'类风湿性关节炎', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'冠心病', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'肺结核', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'肾病综合症', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'风湿性心脏病', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'慢性肝炎', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')},
				{'deseaseName':'其它', 'createdBy':'root', 'createdDate': util.formatDate(new Date(), 'yyyy-MM-dd')}
			];

			array.forEach(function (item){
				var newDeseaseType = new DeseaseType({
					desease_name : item['deseaseName'],
					created_by : item['createdBy'],
					created_date : item['createdDate']
				});

				newDeseaseType.save(function (err){
					if (err) throw err;
				});
			});
		}

		// 跳转
		res.set('Location', ("http://localhost:3000/deseaseType/list"));
        res.send(200);
	});
};

exports.list = function (req, res, callback){
	// 取所有的疾病，展示出来
	var results = {
		counts : 0,
		success : true,
		data : []
	};
	DeseaseType.find(function (err, collection){
		async.forEach(collection, function (item, cb){
			++results.counts;
			results.data.push(item);
			cb();
		}, function(err) {
			if (err) {
				results.success = false;
				throw err;
			}
			console.log('results', results);
			if (callback) {
				callback(results);
			} else {
				res.send(JSON.stringify(results));
			}
	    });
	});
};


exports.del = function (req, res){
	//
};

exports.update = function (req, res){
	//
};