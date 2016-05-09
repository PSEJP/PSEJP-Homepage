var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('develop', {title: 'アプリ開発'});
});

module.exports = router;
