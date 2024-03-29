module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': 'react-app',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			4,
			{ "SwitchCase": 1 }
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-trailing-spaces': [
			"error",
			{ "skipBlankLines": true }
		]
	}
};