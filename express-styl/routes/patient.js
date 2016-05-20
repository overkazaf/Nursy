var express = require('express');
var router = express.Router();
var descTypeCtrl = require('../controllers/deseaseType.js');
var patientCtrl = require('../controllers/patient.js');

router.get('/', function(req, res, next) {
	descTypeCtrl.list(req, res, function (msg){
	    if (msg.success == true) {
	    	res.render('patient', { 
		    	title: '新增病例',
		    	data : msg.data
		    });
	    }
	});
});

router.get('/get/:name', function(req, res, next) {
	patientCtrl.get(req, res, function (msg){
	    if (msg.success == true) {
	    	res.render('lists', { 
		    	title: '检索结果',
		    	data : msg.data
		    });
	    }
	});
});

router.get('/get', function (req, res, next){
	res.set('Location', ('http://localhost:3000/lists'));
	res.send(201);
});

router.post('/create', function(req, res, next) {
    patientCtrl.create(req, res, function (msg) {
    	if (msg.success == true) {
    		res.render('lists', { 
		    	title: '检索结果',
		    	data : msg.data
		    });
    	}
    });
});

router.delete('/destroy/:id', function(req, res, next) {
	patientCtrl.destroy(req, res, function (msg) {
		res.send(JSON.stringify(msg));
	});
});

router.put('/update', function(req, res, next) {
    //patientCtrl.update(req, res);
});

router.get('/list', function(req, res, next) {
    patientCtrl.list(req, res);
});

module.exports = router;
