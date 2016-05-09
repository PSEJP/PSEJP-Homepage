var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('about', {title: '協会のご案内'});
});

module.exports = router;
