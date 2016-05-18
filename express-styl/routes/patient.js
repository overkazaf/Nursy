var express = require('express');
var router = express.Router();
var patientCtrl = require('../controllers/patient.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('patient', { 
    	title: '新增病例'
    });
});

router.post('/create', function(req, res, next) {
    patientCtrl.create(req, res);
});

router.delete('/del', function(req, res, next) {
    //patientCtrl.del(req, res);
});

router.put('/update', function(req, res, next) {
    patientCtrl.create(req, res);
});

router.get('/list', function(req, res, next) {
    patientCtrl.list(req, res);
});

module.exports = router;
