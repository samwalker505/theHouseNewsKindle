/**
 * Created by samwalker on 22/7/14.
 */
(function(){
	var feed = require("feed-read");
	function rss_news(callback){
		feed("http://thehousenews.com/rss/", function(err, articles) {
			if (err) throw err;
			var the_house_news = {};
			the_house_news['site_title'] = '主場新聞 House News';
			the_house_news['site_url'] = 'http://thehousenews.com/'
			the_house_news['site_banner_url'] = "http://thehousenews.com/static/images/housebeta.jpg"
			the_house_news['articles'] = articles;
			callback(the_house_news);
		});
	}
	module.exports = rss_news;
}());