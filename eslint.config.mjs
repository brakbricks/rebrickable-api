// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js'

export default tseslint.config(
  eslint.configs.recommended,  
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@typescript-eslint/no-inferrable-types': 0,
      '@stylistic/js/indent': ['error', 2],
    }
  }
);