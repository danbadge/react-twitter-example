var React = require('react');
var $ = require('jquery');
var SearchResults = require('./search-results');
var Trends = require('./trends');

var Search = React.createClass({
	getInitialState: function () {
		return { 
			searchResults: [],
			url: 'api/search'
		 };
	},
	search: function(e) {
    	e.preventDefault();
		$.ajax({
	      url: this.state.url + '?q=' + this.refs.query.value,
	      dataType: 'json',
	      success: function(data) {
	        this.setState({searchResults: data.tweets});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.state.url, status, err.toString());
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