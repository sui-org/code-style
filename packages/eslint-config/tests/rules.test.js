const eslint = require('eslint');
const path = require('path');
const getFixtures = require('../../../utils/getFixtures');
const printIfErrors = require('../../../utils/printIfErrors');

describe('Rules', () => {
	const cli = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: '.eslintrc.js'
	});
	const { valid, invalid } = getFixtures('tests/fixtures/*.js');
	describe('Valid cases', () => {
		valid.forEach((file) => {
			const fileName = path.basename(file);
			test(fileName, () => {
				const result = cli.executeOnFiles(file);
				printIfErrors(result);
				expect(result.errorCount).toEqual(0);
			});
		});
	});
	describe('Invalid cases', () => {
		invalid.forEach((file) => {
			const fileName = path.basename(file);
			test(fileName, () => {
				const result = cli.executeOnFiles(file);
				expect(result.errorCount).toBeGreaterThan(0);
			});
		});
	});
});
