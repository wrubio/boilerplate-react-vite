import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tsParser from '@typescript-eslint/parser';
import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';

export default [
  {
    ignores: ['dist', 'cypress'],
    files: ['**/*.{ts,tsx,js,jsx,test.ts,test.tsx}'],
    settings: {
      vitest: {
        typeCheck: true,
      },
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 2022,
        jsx: true,
      },
      globals: {
        ...globals.browser,
        ...vitest.environments.env.globals,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
      tseslint,
      prettier: prettierPlugin,
      vitest,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',
      ...vitest.configs.recommended.rules,
      'vitest/max-nested-describe': ['error', { max: 3 }],
    },
  },
  eslint.configs.recommended,
  js.configs.recommended,
  prettierConfig,
];
