describe('Search twitter tests', function () {
	it('should return tweets when I search for "#hudl"', function () {
		browser.ignoreSynchronization = true;

		browser.get('http://localhost:3000');

		var searchTextbox = element(by.css('.test--search'));
		searchTextbox.sendKeys('#hudl');

		element(by.css('.test--search-button')).click();

		var results = element.all(by.css('.test--search-results'));

		expect(results.count()).toBeGreaterThan(1);
	});
});