const eslintExtends = [
  './libs/eslint-rules/styles',
  './libs/eslint-rules/best-practices',
  './libs/eslint-rules/es6',
  './libs/eslint-rules/errors',
  './libs/eslint-rules/node',
  './libs/eslint-rules/variables',
].map(require.resolve)

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    uni: true,
  },
  extends: ['plugin:vue/vue3-recommended', ...eslintExtends],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    allowImportExportEverywhere: false,
  },
  rules: {
    semi: ['error', 'never'],
  },
}
