import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

import eslint from '@eslint/js';

import errors from './eslint/errors.js';
import style from './eslint/style.js';
import typescript from './eslint/typescript.js';

export default tseslint.config(
    eslint.configs.recommended,
    ...typescript,
    ...errors,
    ...style,
    eslintConfigPrettier,
    eslintPluginReact.configs.flat.recommended,
    eslintPluginReact.configs.flat['jsx-runtime'],
    eslintPluginReactHooks.configs.flat.recommended,
    {
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            'react/jsx-no-bind': 'warn',
            'react/no-unstable-nested-components': 'warn'
        }
    },
    {
        ignores: [
            '**/.yarn/',
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
