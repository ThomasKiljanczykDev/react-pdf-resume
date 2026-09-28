/** @typedef { import('prettier').Config } PrettierConfig */
/** @typedef { import('@ianvs/prettier-plugin-sort-imports').PluginConfig } SortImportsConfig */

/**
 * @type {PrettierConfig & SortImportsConfig}
 */
const prettierConfig = {
    // @prettier/plugin-oxc must come before @ianvs/prettier-plugin-sort-imports
    plugins: ['@prettier/plugin-oxc', '@ianvs/prettier-plugin-sort-imports'],
    // Code style
    semi: true,
    tabWidth: 4,
    printWidth: 100,
    endOfLine: 'lf',
    singleQuote: true,
    jsxSingleQuote: false,
    trailingComma: 'none',
    arrowParens: 'avoid',
    bracketSameLine: false,
    // Import sort
    importOrder: [
        '^react$',
        '',
        '<BUILTIN_MODULES>',
        '^@(?!/)',
        '<THIRD_PARTY_MODULES>',
        '',
        '^@/',
        '',
        '^\\.\\./',
        '^\\./',
        '',
        '^.+\\.s?css$'
    ],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy']
};

export default prettierConfig;
