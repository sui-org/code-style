module.exports = {
	extends: ['@stripped-ui/eslint-config', 'plugin:@typescript-eslint/recommended'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/naming-convention': [
			2,
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
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-unused-vars': [
			2,
			{
				vars: 'all',
				args: 'none',
				caughtErrors: 'all'
			}
		]
	}
};
