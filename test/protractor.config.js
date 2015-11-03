exports.config = {
	framework: 'jasmine2',
	specs: ['*_spec.js', '**/*_spec.js'],
	directConnect: true,
	seleniumAddress: null,
	baseAddress: 'http://localhost/3000',
	chromeDriver: 'lib/chromedriver',
	capabilities: {
		browserName: 'chrome'
	}
}