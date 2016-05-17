var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('detail', { 
    	title: '患者详情',
    	msg : 'Hello Kitty'
    });
});

module.exports = router;
