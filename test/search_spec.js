describe('Search twitter tests', function () {
	it('should return tweets when I search for "#hudl"', function () {
		browser.get('http://localhost:3000');

		var searchTextbox = element(by.css('.test--search'));
		searchTextbox.sendKeys('#hudl');

		// expect soem results back
	});
});