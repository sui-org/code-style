const eslint = require('eslint');
const path = require('path');
const getFixtures = require('../../../utils/getFixtures');

describe('Rules', () => {
	const cli = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: '.eslintrc.js'
	});
	const files = getFixtures('tests/fixtures/*.js');
	describe('Valid cases', () => {
		files.valid.forEach((file) => {
			const fileName = path.basename(file) + '.js';
			test(fileName, () => {
				const result = cli.executeOnFiles(file);
				expect(result.errorCount).toEqual(0);
			});
		});
	});
	describe('Invalid cases', () => {
		files.invalid.forEach((file) => {
			const fileName = path.basename(file) + '.js';
			test(fileName, () => {
				const result = cli.executeOnFiles(file);
				expect(result.errorCount).toBeGreaterThan(0);
			});
		});
	});
});
