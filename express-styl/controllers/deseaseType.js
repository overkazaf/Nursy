var mongoose = require('mongoose');
var deseaseType = mongoose.model('DeseaseType');

exports.list = function (req, res){
	// 取所有的疾病，展示出来
	res.render('index', {
		title : 'testing',
		data : [1,2,3,4]
	});
};