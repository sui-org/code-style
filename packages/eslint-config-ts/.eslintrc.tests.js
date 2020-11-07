const config = require('./.eslintrc.js');

module.exports = {
	...config,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	}
};
