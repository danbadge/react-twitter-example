var React = require('react');

var TrendingTopics = React.createClass({
	getInitialState: function () {
		return { 
			trendingTopics: []
		 };
	},
	componentDidMount: function () {
		this.setState({trendingTopics: [ { id: '123', text: 'hot' } ]});
	},
	render: function () {
		var topics = this.state.trendingTopics.map(function (topic) {
			return (
				<li className='test--trending-topic list-group-item' key={topic.id}>
					<a href='#'>{topic.text}</a>
				</li>
				);
		});

		return (
			<ul className='list-group'>
				{topics}
			</ul>
			);
	}
});

module.exports = TrendingTopics;