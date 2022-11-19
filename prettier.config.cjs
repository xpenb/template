module.exports = {
	$schema: 'https://json.schemastore.org/prettierrc',
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	semi: false,
	singleQuote: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	endOfLine: 'lf',
	embeddedLanguageFormatting: 'auto',
	overrides: [
		{
			files: '*.vue',
			options: {
				vueIndentScriptAndStyle: true,
				singleAttributePerLine: true,
			},
		},
	],
}
