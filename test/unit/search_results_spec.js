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
        id: '123',
        text: 'this is a tweet',
        user: {
          screen_name: 'username',
          profile_image_url_https: 'https://something/image.jpg'
        }
      }
    ];

    var searchResults = TestUtils.renderIntoDocument(
      <SearchResults results={results}/>
    );

    var searchResult = TestUtils.findRenderedDOMComponentWithTag(searchResults, 'li');
    var avatarImage = TestUtils.findRenderedDOMComponentWithTag(searchResults, 'img');

    expect(searchResult.textContent).toContain('this is a tweet');
    expect(searchResult.textContent).toContain('@username');
    expect(avatarImage.attributes['src'].value).toBe('https://something/image.jpg');
  });

  it('should render tweet username and image from twitter search results', function() {
    var results=[
      {
        id: '123',
        text: 'this is a tweet',
        user: {}
      },
      {
        id: '345',
        text: 'this is another tweet',
        user: {}
      },
      {
        id: '14',
        text: 'this is another another tweet',
        user: {}
      }
    ];

    var searchResults = TestUtils.renderIntoDocument(
      <SearchResults results={results}/>
    );

    var searchResult = TestUtils.scryRenderedDOMComponentsWithTag(searchResults, 'li');

    expect(searchResult.length).toEqual(3);
  });

});