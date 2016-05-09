var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('thankyou', {title: 'お問合せ確認'});
});

module.exports = router;
