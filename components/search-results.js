var React = require('react');

var SearchResults = React.createClass({
	render: function () {
		var resultsListItems = this.props.results.map(function (result) {
			return (<li className='test--search-result' key={result.id}>{result.tweet}</li>);
		});

		return (
			<ul>
				{resultsListItems}
			</ul>
			);
	}
});

module.exports = SearchResults;