import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from '@eslint/compat';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node, // Ajout pour Node.js si nécessaire
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  // Configuration spécifique pour les fichiers de test
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.vitest, // Ajoute les globales de Vitest (describe, expect, test, etc.)
        ...globals['jest-dom'], // Ajoute les globales de @testing-library/jest-dom
      },
    },
    plugins: {
      'testing-library': require('eslint-plugin-testing-library'),
    },
    rules: {
      ...require('eslint-plugin-testing-library').configs.react.rules, // Règles pour Testing Library
    },
  },
]);