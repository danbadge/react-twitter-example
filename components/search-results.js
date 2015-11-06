var React = require('react');

var SearchResults = React.createClass({
	render: function () {
		var twitterUrl = 'http://twitter.com/';
		var resultsListItems = this.props.results.map(function (result) {
			return (
				<li className='test--search-result list-group-item' key={result.id}>
					<div className='search-result__avatar'>
						<img src={result.user.profile_image_url_https} width="40" />
						<a href={twitterUrl + result.user.screen_name}>{'@' + result.user.screen_name}</a>
					</div>
					<div className='search-result__tweet'>{result.text}</div>
				</li>
				);
		});

		return (
			<ul className='list-group'>
				{resultsListItems}
			</ul>
			);
	}
});

module.exports = SearchResults;