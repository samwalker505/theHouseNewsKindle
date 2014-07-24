var express = require('express');
var router = express.Router();

/* GET home page. */

var rss_news = require('../models/rss_news');
router.get('/', function(req, res) {
	rss_news(function(body){
		res.render('index', body);
	})
});

module.exports = router;
