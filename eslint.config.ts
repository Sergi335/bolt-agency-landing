import js from '@eslint/js'
import astroParser from 'astro-eslint-parser'
import astroPlugin from 'eslint-plugin-astro'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  // JS base
  js.configs.recommended,

  // TS base + tus reglas
  {
    files: ['**/*.{ts,tsx,js,mjs,cjs}'],
    ...tseslint.configs.recommended[0], // recommended es un array
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json' // opcional si usas type-aware linting
      }
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'space-before-function-paren': ['error', 'always'],
      'keyword-spacing': 'error',
      'space-infix-ops': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'warn'
    }
  },

  // Config Astro base + tus reglas
  ...astroPlugin.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: { astro: astroPlugin },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'space-before-function-paren': ['error', 'always'],
      'keyword-spacing': 'error',
      'space-infix-ops': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'warn'
    }
  }
])

