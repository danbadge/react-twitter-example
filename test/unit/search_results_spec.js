jest.dontMock('../../components/search-results');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var SearchResults = require('../../components/search-results');

describe('SearchResults', function() {

  it('should render no tweets when search results are empty', function() {
    var results=[];

    var searchResults = TestUtils.renderIntoDocument(
      <SearchResults results={results}/>
    );

    var searchResultsNode = ReactDOM.findDOMNode(searchResults);

    expect(searchResultsNode.textContent).toEqual('');
  });

  it('should render tweet username and image from twitter search results', function() {
    var results=[
      {
        'id': '123',
        'tweet': 'this is a tweet',
        'username': '@username',
        'imageUrl': 'image-url'
      }
    ];

    var searchResults = TestUtils.renderIntoDocument(
      <SearchResults results={results}/>
    );

    var searchResult = TestUtils.findRenderedDOMComponentWithTag(searchResults, 'li');

    expect(searchResult.textContent).toContain('this is a tweet');
    expect(searchResult.textContent).toContain('@username');
    //expect(searchResult.textContent).toContain("src='image-url'");
  });

  it('should render tweet username and image from twitter search results', function() {
    var results=[
      {
        'id': '123',
        'tweet': 'this is a tweet'
      },
      {
        'id': '124',
        'tweet': 'this is another tweet'
      },
      {
        'id': '14',
        'tweet': 'this is another another tweet'
      }
    ];

    var searchResults = TestUtils.renderIntoDocument(
      <SearchResults results={results}/>
    );

    var searchResult = TestUtils.scryRenderedDOMComponentsWithTag(searchResults, 'li');

    expect(searchResult.length).toEqual(3);
  });

});