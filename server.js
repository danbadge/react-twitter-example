var express = require('express');
var path = require('path');
var OAuthSimple = require('oauthsimple');
var request = require('request');

var app = express();

app.use('/dist', express.static('dist'));
app.use('/css', express.static('css'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/search', function (req, res) {
	res.json({
		tweets: [
			{ id: '123', tweet: 'this is a tweet' },
			{ id: '122', tweet: 'this is another tweet' } 
		]
	})
});

app.get('/api/trends', function (req, res) {
	var twitterKey = '';
	var twitterSecret = '';
	var oauth = new OAuthSimple(twitterKey, twitterSecret);
    var signedRequest = oauth.sign({
      action: "GET",
      path: "https://api.twitter.com/1.1/trends/place.json",
      parameters: { id: '44418' }
    });

    request
	  .get(signedRequest.signed_url)
	  .on('response', function(response) {
	    console.log(response.statusCode) 
	  });
	  	  
	res.json({
		trends: [
			{ id: '123', text: 'this is a trend' },
			{ id: '122', text: 'this is another trendß' } 
		]
	});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});