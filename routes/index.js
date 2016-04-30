var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '一般社団法人PCサポート技術者協会のWEBサイト' });
});

module.exports = router;
