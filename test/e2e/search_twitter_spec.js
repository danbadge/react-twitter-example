describe('Search twitter tests', function () {
	beforeEach(function () {
		browser.ignoreSynchronization = true;
	});

	it('should return tweets when I search for "#hudl"', function () {
		browser.get('http://localhost:3000');

		var searchTextbox = element(by.css('.test--search'));
		searchTextbox.sendKeys('#hudl');

		element(by.css('.test--search-button')).click();

		var results = element.all(by.css('.test--search-result'));

		expect(results.count()).toBeGreaterThan(1);
	});
});