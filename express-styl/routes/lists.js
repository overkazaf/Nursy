var express = require('express');
var patientCtrl = require('../controllers/patient.js');
var router = express.Router();

/* GET list page. */
router.get('/', function(req, res, next) {
	patientCtrl.list(req, res, function (msg) {
		if (msg.success == true) {
			var totalCount = 10;
		    var current = 1;
		    var totalPages = 3;

		    res.render('lists', {
		        current: current,
		        totalCount: totalCount,
		        totalPages: totalPages,
		        data: msg.data
		    });
		}
	});
    
});

module.exports = router;
