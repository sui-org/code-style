const getFixtures = require('../../../utils/getFixtures');

describe('Rules', () => {
	const files = getFixtures('tests/fixtures/*.js');
	console.log(files);
	describe('Valid cases', () => {
		test('test', () => {
			console.log(444);
		});
	});
});
