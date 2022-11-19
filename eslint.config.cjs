module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./packages/*/tsconfig.json', './apps/*/tsconfig.json'],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				paths: ['packages/*/tsconfig.json', 'apps/*/tsconfig.json'],
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/ban-ts-comment': 'warn',

		'sonarjs/prefer-single-boolean-return': 'off',

		'import/no-unresolved': 2,
		'import/no-nodejs-modules': 2,
		'import/no-duplicates': 2,
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '@xpenb/**',
						group: 'external',
						position: 'after',
					},
				],
			},
		],
	},
	overrides: [
		{
			files: ['*.json'],
			extends: ['plugin:json/recommended'],
		},
		{
			files: ['*.test.ts', '*.test.tsx'],
			rules: {
				'prefer-arrow-callback': 'error',
				'sonarjs/no-duplicate-string': 'off',
			},
		},
	],
}
