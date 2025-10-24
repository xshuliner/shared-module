import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

const configCommon = {
  ignores: ['**/dist/**', '**/node_modules/**', '.*', '**/*.d.ts'],
  plugins: {
    prettier: eslintPluginPrettier,
  },
  languageOptions: {
    ecmaVersion: 'latest', // ECMA语法支持版本
    sourceType: 'module', // 模块化类型
    parser: tseslint.parser, // 解析器
  },
  rules: {
    ...eslint.configs.recommended.rules,
    ...tseslint.configs.recommended.rules,
    ...eslintPluginPrettier.configs.recommended.rules,
    ...eslintConfigPrettier.rules,
    'no-var': 'error',
    'no-unused-vars': 'warn',
  },
};

export default defineConfig(
  // Browser
  {
    ...configCommon,
    files: ['packages/ui-react/**/*.{ts,js,tsx,jsx}'],
    languageOptions: {
      ...configCommon.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...configCommon.rules,
      // 自定义规则
    },
  },
  // Node
  {
    ...configCommon,
    files: [
      'packages/cli/**/*.{ts,js,tsx,jsx}',
      'packages/config-eslint/**/*.{ts,js,tsx,jsx}',
      'packages/config-prettier/**/*.{ts,js,tsx,jsx}',
    ],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ...configCommon.languageOptions,
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...configCommon.rules,
      // 自定义规则
    },
  },
  // Utils
  {
    ...configCommon,
    files: ['packages/utils/**/*.{ts,js,tsx,jsx}'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ...configCommon.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...configCommon.rules,
      // 自定义规则
    },
  }
);
