const path = require('path');
const tsConfig = 'tsconfig.json';
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 6,
		project: [`${__dirname}/${tsConfig}`],
		tsconfigRootDir: '.',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	globals: {},
	ignorePatterns: ['.eslintrc.js'],
	settings: {
		propWrapperFunctions: [
			// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
			'forbidExtraProps',
			{
				property: 'freeze',
				object: 'Object',
			},
		],
	},
	rules: {
		'space-before-function-paren': 0,
		'@typescript-eslint/no-inferrable-types': 'off', // @typescript-eslint/recommended
		'@typescript-eslint/explicit-function-return-type': ['error'],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-magic-numbers': [
			'error',
			{
				ignore: [0, 1, -1], // for loops and such
				ignoreArrayIndexes: true,
				ignoreEnums: true,
				ignoreNumericLiteralTypes: true,
			},
		],
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/typedef': [
			'error',
			{
				arrayDestructuring: false,
				arrowParameter: true,
				memberVariableDeclaration: true,
				objectDestructuring: false,
				parameter: true,
				propertyDeclaration: true,
				variableDeclaration: true,
				variableDeclarationIgnoreFunction: true,
			},
		],
	},
};