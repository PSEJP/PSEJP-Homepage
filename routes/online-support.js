var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('online-support', {title: 'オンサイトサポート'});
});

module.exports = router;
