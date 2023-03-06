module.exports = {
  env: {
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'class-methods-use-this': 'off',
    'max-len': [
      'warn',
      120,
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
  },
};
