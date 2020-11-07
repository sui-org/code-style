const config = require('./.eslintrc.js');

module.exports = {
	...config,
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 12
	},
	env: {
		browser: true,
		es2021: true,
		node: true
	}
};
