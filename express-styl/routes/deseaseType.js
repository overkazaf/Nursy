var express = require('express');
var router = express.Router();
var desTypeCtrl = require('../controllers/deseaseType.js');


router.get('/', function(req, res, next) {
	console.log('aaa');
	desTypeCtrl.init(req, res);
});

router.get('/init', function(req, res, next) {
	console.log('aaa');
	desTypeCtrl.init(req, res);
});

router.post('/create', function(req, res, next) {
	//desTypeCtrl.create(req, res);
});

router.get('/list', function(req, res, next) {
	desTypeCtrl.list(req, res);
});

router.delete('/del', function(req, res, next) {
	//desTypeCtrl.del(req, res);
});

router.put('/update', function(req, res, next) {
	//desTypeCtrl.update(req, res);
});

module.exports = router;

