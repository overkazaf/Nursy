var doctorCtrl = require('../controllers/doctor');
var express = require('express');
var router = express.Router();

router.post('/add', function(req, res, next) {
	var username = req.body.username;
	var result = {
		success : true,
		msg : "Successfully add item"
	};
	doctorCtrl.get(req, res, function (collection){
		if (collection.length) {
			result.success = false;
			result.msg = "Username has been registered";
			res.send(result);
		} else {
			doctorCtrl.create(req, res, function (msg) {
				res.send(msg);
			});
		}
	});
});


module.exports = router;

