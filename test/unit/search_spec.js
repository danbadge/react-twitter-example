jest.dontMock('../../components/search');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var Search = require('../../components/search');

describe('Search', function() {
  it('should search twitter when enters query and clicks search', function() {
    var search = TestUtils.renderIntoDocument(
      <Search />
    );

    var searchNode = ReactDOM.findDOMNode(search);
    var searchTextbox = TestUtils.findRenderedDOMComponentWithClass(search, "test--search");
	TestUtils.Simulate.change(searchTextbox, {target: {value: 'search-query'}});

    var searchButton = TestUtils.findRenderedDOMComponentWithClass(search, "test--search-button");
    TestUtils.Simulate.click(searchButton);

	//todo this -> expect($.ajax).toBeCalled({});
  });
});