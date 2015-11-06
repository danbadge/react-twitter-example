describe('Trends tests', function () {
	beforeEach(function () {
		browser.ignoreSynchronization = true;
	});

	it('should show top ten trends', function () {
		browser.get('http://localhost:3000');

		browser.sleep(2000);

		var trends = element.all(by.css('.test--trend'));

		expect(trends.count()).toBe(10);
	});

	it('should show tweets related to a selected trend', function () {
		browser.get('http://localhost:3000');

		browser.sleep(2000);

		var trends = element.all(by.css('.test--trend')).first();
		trends.click();

		browser.sleep(2000);

		var results = element.all(by.css('.test--search-result'));

		expect(results.count()).toBeGreaterThan(1);
		//add should mention topic???
	});
});