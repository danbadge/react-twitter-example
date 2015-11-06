var React = require('react');
var $ = require('jquery');
var SearchResults = require('./search-results');
var Trends = require('./trends');

var Search = React.createClass({
	getInitialState: function () {
		return { 
			searchResults: []
		 };
	},
	search: function(e) {
    	e.preventDefault();
    	var url = 'api/search?q=' + this.refs.query.value;
		$.ajax({
			url: url,
			dataType: 'json',
			success: function(data) {
				this.setState({searchResults: data.statuses});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(url, status, err.toString());
			}.bind(this)
		});
	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.search} className='input-group'>
					<input className='test--search form-control' type='text' placeholder='Enter your search term' ref='query' />
					<span className='input-group-btn'>
						<input type='submit' className='btn btn-default test--search-button' value='Search' />
					</span>
				</form>
				<Trends />
				<SearchResults results={this.state.searchResults} />
			</div>
			);
	}
});

module.exports = Search;