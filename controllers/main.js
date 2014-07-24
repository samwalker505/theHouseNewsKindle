/**
 * Created by samwalker on 24/7/14.
 */
var rss_news = require('../models/rss_news');
rss_news(function(body){
	console.log(body);
})