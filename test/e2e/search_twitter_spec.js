describe('Search twitter tests', function () {
	beforeEach(function () {
		browser.ignoreSynchronization = true;
	});

	it('should return tweets when I search for "#football"', function () {
		browser.get('http://localhost:3000');

		var searchTextbox = element(by.css('.test--search'));
		searchTextbox.sendKeys('#football');

		browser.sleep(2000);

		var results = element.all(by.css('.test--search-result'));

		expect(results.count()).toBeGreaterThan(1);
	});
});