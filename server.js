var express = require('express');
var path = require('path');

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
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});