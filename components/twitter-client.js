var OAuthSimple = require('oauthsimple');
var $ = require('jquery');

var TwitterClient = function () {
	var twitterKey = '';
	var twitterSecret = ''

	return {
		trends: function () {
			oauth = new OAuthSimple(twitterKey, twitterSecret);
		    request = oauth.sign({
		      action: "GET",
		      path: "https://api.twitter.com/1.1/trends/place.json",
		      parameters: { id: '44418' }
		    });

    		$.ajax({
			      url: request.signed_url,
			      dataType: 'json',
			    })
	    		.done(function () {
	    			console.log('success');
	    		})
	    		.fail(function () {
	    			console.error('failed to get trends');
	    		});
		}
	};
};

module.exports = TwitterClient;