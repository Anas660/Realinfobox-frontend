module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    requireConfigFile: false,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier'],
  // required to lint *.vue files
  plugins: ['vue', 'unused-imports'],
  // add your custom rules here
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    eqeqeq: ['error', 'always'],
    'no-console': 'warn',
    'no-control-regex': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn',
    'object-curly-spacing': ['error', 'always'], // require padding inside curly braces
    'vue/html-self-closing': ['off'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/valid-v-slot': 'off',
    semi: ['warn', 'always', { omitLastInOneLineBlock: true }],
  },
};
