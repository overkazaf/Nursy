var express = require('express');
var router = express.Router();
var provider = require('../config/mongoose.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	provider.findAll(function (error,collection){
		res.render('index', { 
	    	title: 'Express',
	    	data: collection
	    });
	});
});

module.exports = router;
