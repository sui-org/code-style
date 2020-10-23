module.exports = {
	extends: ['standard', 'plugin:prettier/recommended'],
	rules: {
		'no-tabs': 'off',
		'import/no-unresolved': 'off',
		'import/namespace': 'off',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		semi: ['error', 'always']
	}
};
