var React = require('react');
var dispatcher = require('./dispatcher');
var request = require('superagent');

var Trends = React.createClass({
	getInitialState: function () {
		return { 
			trends: []
		 };
	},
	componentDidMount: function () {
		var self = this;
		request
			.get('api/trends')
			.end(function (error, response) {
				if (error) {
					console.error(url, error.status, err.toString());
				} else {
					self.setState({trends: response.body[0].trends});
				}
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