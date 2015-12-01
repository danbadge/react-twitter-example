var React = require('react');
var $ = require('jquery');
var dispatcher = require('./dispatcher');
var self = this;

var Trends = React.createClass({
	getInitialState: function () {
		return { 
			trends: []
		 };
	},
	componentDidMount: function () {
    	var url = 'api/trends';
		$.ajax({
			url: url,
			dataType: 'json',
			success: function(data) {
				this.setState({trends: data[0].trends});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(url, status, err.toString());
			}.bind(this)
		});
	},
	trendSelected: function(trend) {
		dispatcher.dispatch({
			actionType: 'search',
			term: trend
		});
	},
	render: function () {
		var trendsHtml = this.state.trends.map(function (trend) {
			return (
				<li className='test--trend list-group-item' key={trend.name}>
					<a className='test--trend-link' href='#' onClick={this.trendSelected.bind(this, trend.name)}>{trend.name}</a>
				</li>
				);
		}.bind(this));

		return (
			<ul className='list-group'>
				{trendsHtml}
			</ul>
			);
	}
});

module.exports = Trends;