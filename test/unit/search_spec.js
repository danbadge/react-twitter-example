console.log('hellooooo');
jest.dontMock('../../components/search-results');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var SearchResults = require('../../components/search-results');

describe('SearchResults', function() {

  it('should render a list of tweets', function() {

    var searchResults = TestUtils.renderIntoDocument(
      <SearchResults results={[]}/>
    );

    expect(true).toEqual(false);
  });

});