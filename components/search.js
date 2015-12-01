var React = require('react');
var $ = require('jquery');
var SearchResults = require('./search-results');
var Trends = require('./trends');
var searchStore = require('./search-store');

var Search = React.createClass({
	getInitialState: function () {
		return { 
			searchResults: [],
			searchTerm: ''
		 };
	},
	searchFor: function (query) {
		$.ajax({
			url: 'api/search?q=' + encodeURIComponent(query),
			dataType: 'json',
			success: function(data) {
				this.setState({searchResults: data.statuses});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(url, status, err.toString());
			}.bind(this)
		});
	},
	searchTermChanged: function(event) {
		var searchTerm = event.target.value;
		this.setState({searchTerm: event.target.value});
		this.searchFor(searchTerm);
	},
	componentDidMount: function () {
		var component = this;
		searchStore.addListener(function () {
			component.setState({searchTerm: searchStore.term});
			component.searchFor(searchStore.term);
		});
	},
	render: function () {
		var searchTerm = this.state.searchTerm;
		return (
			<div>
				<form>
					<input className='test--search form-control' type='text' 
					placeholder='Search twitter for ...' value={searchTerm} onChange={this.searchTermChanged} />
				</form>
				<Trends />
				<SearchResults results={this.state.searchResults} />
			</div>
			);
	}
});

module.exports = Search;