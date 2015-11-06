var $ = require('jquery');

var TwitterClient = function () {
	return {
		trends: function () {
    		$.ajax({
			      url: 'api/trends',
			      dataType: 'json',
			    })
	    		.done(function (data) {
	    			return data;
	    		})
	    		.fail(function () {
	    			console.error('failed to get trends');
	    		});
		}
	};
};

module.exports = TwitterClient;