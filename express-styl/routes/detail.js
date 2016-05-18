var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
	console.log('detailID', req.params.id);
    res.render('detail', { 
    	title: '患者详情',
    	msg : 'Hello Kitty'
    });
});

module.exports = router;

