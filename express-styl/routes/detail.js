var patientCtrl = require('../controllers/patient');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('detail', { 
    	title: '患者详情',
    	msg : "Hello Kitty"
    });
    
});

router.get('/:id', function(req, res, next) {
	patientCtrl.load(req, res, function (personData){
		console.log(personData);
		res.render('detail', { 
	    	title: '患者详情',
	    	data : personData
	    });
	});
    
});

module.exports = router;

