var React = require('react');
var TwitterClient = require('./twitter-client')

var Trends = React.createClass({
	getInitialState: function () {
		return { 
			trends: []
		 };
	},
	componentDidMount: function () {
		var twitter = new TwitterClient();
		this.setState({trends: twitter.trends()});
	},
	render: function () {
		var trendsHtml = this.state.trends.map(function (trend) {
			return (
				<li className='test--trend list-group-item' key={trend.id}>
					<a href='#'>{trend.text}</a>
				</li>
				);
		});

		return (
			<ul className='list-group'>
				{trendsHtml}
			</ul>
			);
	}
});

module.exports = Trends;