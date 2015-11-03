var React = require('react');

var search = React.createClass({
	render: function () {
		return (
			<form method='GET' action='/api/search' className='input-group'>
				<input className='test--search form-control' type='text' placeholder='Enter your search term' />
				<span className='input-group-btn'>
					<button className='btn btn-default test--search-button' type='button'>Search</button>
				</span>
			</form>
			);
	}
});

module.exports = search;