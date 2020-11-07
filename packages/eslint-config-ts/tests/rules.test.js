const eslint = require('eslint');
const path = require('path');
const getFixtures = require('../../../utils/getFixtures');
const printIfErrors = require('../../../utils/printIfErrors');

describe('Rules', () => {
	const cli = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: '.eslintrc.js',
		parser: '@typescript-eslint/parser',
		parserOptions: {
			sourceType: 'module',
			ecmaVersion: 2019
		}
	});

	const { valid, invalid } = getFixtures('tests/fixtures/*.ts');
	describe('Valid cases', () => {
		valid.forEach((file) => {
			const fileName = path.basename(file) + '.ts';
			test(fileName, () => {
				const result = cli.executeOnFiles(file);
				printIfErrors(result);
				expect(result.errorCount).toEqual(0);
			});
		});
	});
	describe('Invalid cases', () => {
		invalid.forEach((file) => {
			const fileName = path.basename(file) + '.ts';
			test(fileName, () => {
				const result = cli.executeOnFiles(file);
				expect(result.errorCount).toBeGreaterThan(0);
			});
		});
	});
});
