var React = require('react');

var SearchResults = React.createClass({
	render: function () {
		var resultsListItems = this.props.results.map(function (result) {
			return (
				<li className='test--search-result list-group-item' key={result.id}>
					{result.tweet}
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