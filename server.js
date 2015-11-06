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


var twitterKey = 'Pqesn8TJNIqNDpMWs6YecPPDN';
var twitterSecret = 'LYRZWtOhWXCZqQtaVOEQzOnMqVMsXJ5mj3a1iy54ktY0DWmCRj';
app.get('/api/search', function (req, res) {
	var oauth = new OAuthSimple(twitterKey, twitterSecret);
    var signedRequest = oauth.sign({
      action: "GET",
      path: "https://api.twitter.com/1.1/search/tweets.json",
      parameters: { q: req.params.q, count: 10 }
    });

    request
    	.get(signedRequest.signed_url)
    	.on('error', function(err) {
    		console.log(err)
    	})
    	.pipe(res);
});

app.get('/api/trends', function (req, res) {
	var oauth = new OAuthSimple(twitterKey, twitterSecret);
    var signedRequest = oauth.sign({
      action: "GET",
      path: "https://api.twitter.com/1.1/trends/place.json",
      parameters: { id: '44418' }
    });

    request
    	.get(signedRequest.signed_url)
    	.on('error', function(err) {
    		console.log(err)
    	})
    	.pipe(res);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});