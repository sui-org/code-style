/**
 * @fileOverview Valid examples for rules
 * ```json
 * {
 *     "no-tabs": "off",
 *     "indent": [
 *         "error",
 *         "tab"
 *         {
 *             "SwitchCase": 1
 *         }
 *     ]
 * }
 * ```
 */

const obj = {
	prop1: true
};

switch (obj.prop1) {
	case true:
		console.log('true');
		break;
	case false:
		console.log('false');
		break;
	default:
		console.log('unknown');
}
