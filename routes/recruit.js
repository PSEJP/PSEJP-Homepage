var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('recruit', {title: '入会案内（エンジニア対象）'});
});

module.exports = router;
