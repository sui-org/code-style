module.exports = {
	extends: ['standard', 'plugin:prettier/recommended'],
	rules: {
		'no-tabs': 0,
		'import/no-unresolved': 0,
		'import/namespace': 0,
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
