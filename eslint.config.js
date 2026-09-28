import eslintReact from '@eslint-react/eslint-plugin';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

import errors from './eslint/errors.js';
import style from './eslint/style.js';
import typescript from './eslint/typescript.js';

export default tseslint.config(
    eslint.configs.recommended,
    ...typescript,
    ...errors,
    ...style,
    eslintConfigPrettier,
    {
        files: ['**/*.ts', '**/*.tsx'],
        ...eslintReact.configs['recommended-type-checked']
    },
    eslintPluginReactHooks.configs.flat.recommended,
    {
        // Covered by eslint-plugin-react-hooks
        rules: {
            '@eslint-react/error-boundaries': 'off',
            '@eslint-react/exhaustive-deps': 'off',
            '@eslint-react/purity': 'off',
            '@eslint-react/rules-of-hooks': 'off',
            '@eslint-react/set-state-in-effect': 'off',
            '@eslint-react/set-state-in-render': 'off',
            '@eslint-react/static-components': 'off',
            '@eslint-react/unsupported-syntax': 'off',
            '@eslint-react/use-memo': 'off'
        }
    },
    {
        ignores: [
            '**/.idea/',
            '**/node_modules/',
            '**/dist*/',
            '**/build/',
            '**/.vscode/',
            '**/.cache/',
            '**/prettier.config.js',
            '**/eslint.config.js'
        ]
    }
);
