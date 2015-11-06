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
	search: function (e) {
		e.preventDefault();
    	this.searchFor(this.refs.query.value);
	},
	selectTrend: function (trend) {
    	this.searchFor(trend);
	},
	searchFor: function (query) {
		$.ajax({
			url: 'api/search?q=' + query,
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
					<input className='test--search form-control' type='text' placeholder='Search twitter for ...' ref='query' />
					<span className='input-group-btn'>
						<button type='submit' className='btn btn-default test--search-button'>Search</button>
					</span>
				</form>
				<Trends selectTrend={this.selectTrend}/>
				<SearchResults results={this.state.searchResults} />
			</div>
			);
	}
});

module.exports = Search;