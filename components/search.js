var React = require('react');
var SearchResults = require('./search-results');
var Trends = require('./trends');
var searchStore = require('../flux/search-store');
var request = require('superagent');

var Search = React.createClass({
	getInitialState: function () {
		return { 
			searchResults: [],
			searchTerm: ''
		 };
	},
	searchFor: function (query) {
		var self = this;
		request
			.get('api/search')
			.query({ q: encodeURIComponent(query) })
			.end(function (error, response) {
				if (error) {
					console.error(url, error.status, err.toString());
				} else {
					self.setState({searchResults: response.body.statuses});
				}
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