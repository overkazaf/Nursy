var express = require('express');
var router = express.Router();
var descTypeCtrl = require('../controllers/deseaseType.js');
var patientCtrl = require('../controllers/patient.js');

router.get('/', function(req, res, next) {
	descTypeCtrl.list(req, res, function (list){
	    res.render('patient', { 
	    	title: '新增病例',
	    	data : list
	    });
	});
});

router.post('/create', function(req, res, next) {
    patientCtrl.create(req, res, function (msg) {
    	if (msg.success == true) {
    		res.render('patient', { 
		    	title: '新增病例',
		    	data : msg.data
		    });
    	}
    });
});

router.delete('/del', function(req, res, next) {
    //patientCtrl.del(req, res);
});

router.put('/update', function(req, res, next) {
    //patientCtrl.update(req, res);
});

router.get('/list', function(req, res, next) {
    patientCtrl.list(req, res);
});

module.exports = router;
