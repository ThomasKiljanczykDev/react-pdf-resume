// @ts-check
import tseslint from 'typescript-eslint';

export default tseslint.config(...tseslint.configs.recommended, {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
        '@typescript-eslint': tseslint.plugin
    },
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            projectService: true,
            ecmaVersion: 'latest',
            sourceType: 'module'
        }
    },
    rules: {
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-restricted-imports': [
            'error',
            {
                name: 'react-redux',
                importNames: ['useSelector', 'useDispatch', 'createSlice'],
                message: 'Use typed hooks `useAppDispatch` and `useAppSelector` instead.'
            }
        ]
    }
});
