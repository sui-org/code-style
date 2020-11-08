module.exports = {
	extends: ['plugin:@typescript-eslint/recommended', '@stripped-ui/eslint-config'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'property',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'parameterProperty',
				format: ['camelCase']
			},
			{
				selector: 'parameterProperty',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'method',
				format: ['camelCase']
			},
			{
				selector: 'method',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'accessor',
				format: ['camelCase']
			},
			{
				selector: 'accessor',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'enumMember',
				format: ['PascalCase']
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase']
			},
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase']
			},
			{
				selector: 'parameter',
				format: ['camelCase', 'PascalCase']
			},
			{
				selector: 'class',
				format: ['PascalCase']
			},
			{
				selector: 'class',
				modifiers: ['abstract'],
				format: ['PascalCase'],
				prefix: ['Abstract']
			},
			{
				selector: 'interface',
				format: ['PascalCase']
			},
			{
				selector: 'typeAlias',
				format: ['PascalCase']
			},
			{
				selector: 'typeParameter',
				format: ['PascalCase']
			},
			{
				selector: 'enum',
				format: ['PascalCase'],
				custom: {
					regex: '[a-z]List$',
					match: true
				}
			}
		],
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'none',
				caughtErrors: 'all'
			}
		],
		'no-unused-vars': 'off'
	}
};
