describe('Search twitter tests', function () {
	beforeEach(function () {
		browser.ignoreSynchronization = true;
	});

	it('should show top ten trending sports', function () {
		browser.get('http://localhost:3000');

		var trendingSportsTopics = element.all(by.css('.test--trending-topic'));

		expect(trendingSportsTopics.count()).toBe(10);
	});

	it('should show tweets related to trending sports when a trending sport is selected', function () {
		browser.get('http://localhost:3000');

		var trendingSportsTopics = element.all(by.css('.test--trending-topic')).first();
		trendingSportsTopics.click();

		var results = element.all(by.css('.test--search-result'));

		expect(results.count()).toBeGreaterThan(1);
		//add should mention topic???
	});
});