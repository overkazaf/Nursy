var express = require('express');
var router = express.Router();
var doctorCtrl = require('../controllers/doctor.js');

/* GET login page. */
router.get('/', function(req, res, next) {
	res.render("login", {
		title : "登陆窗口"
	});
});

router.post('/attempt', function (req, res, next) {
	var result = {
		success : true,
		message : "Successfuly login"
	};
    doctorCtrl.get(req, res, function (collection){
    	if (collection.length) {
    		if (req.body.password != collection[0].password) {
    			result.success = false;
    			result.message = "Password invalid";
    		}
    	} else {
    		result.success = false;
    		result.message = "User not exists";
    	}

    	res.send(result);

    });
})

module.exports = router;
