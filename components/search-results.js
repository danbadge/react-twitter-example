var React = require('react');

var SearchResults = React.createClass({
	render: function () {
		var resultsListItems = this.props.results.map(function (result) {
			return (
				<li className='test--search-result list-group-item' key={result.id}>
					<div className='search-result__avatar'>
						<img src='{result.imageUrl}' />
						<span>{result.username}</span>
					</div>
					<div className='search-result__tweet'>{result.tweet}</div>
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