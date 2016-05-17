var express = require('express');
var router = express.Router();

/* GET list page. */
router.get('/', function(req, res, next) {

	var list = [
        { 'id': 1, 'name': 'John', 'deseaseType': '高血压', 'deseaseDesc': '症状描述', 'phone': '12312312332', 'visitDate': '2015-11-03 14:30' }, 
        { 'id': 2, 'name': 'John', 'deseaseType': '高血压', 'deseaseDesc': '症状描述', 'phone': '12312312332', 'visitDate': '2015-11-03 14:30' }, 
        { 'id': 3, 'name': 'John', 'deseaseType': '高血压', 'deseaseDesc': '症状描述', 'phone': '12312312332', 'visitDate': '2015-11-03 14:30' }, 
        { 'id': 4, 'name': 'John', 'deseaseType': '高血压', 'deseaseDesc': '症状描述', 'phone': '12312312332', 'visitDate': '2015-11-03 14:30' }
        ];
    var totalCount = 10;
    var current = 1;
    var totalPages = 3;

    res.render('lists', {
        current: current,
        totalCount: totalCount,
        totalPages: totalPages,
        data: list
    });
});

module.exports = router;
