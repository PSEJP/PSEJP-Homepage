var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('web-management');
});

module.exports = router;
