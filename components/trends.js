var React = require('react');
var $ = require('jquery');

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
	render: function () {
		var trendsHtml = this.state.trends.map(function (trend) {
			return (
				<li className='test--trend list-group-item' key={trend.name}>
					<a href='#'>{trend.name}</a>
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