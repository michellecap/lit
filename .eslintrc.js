module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    // add more generic rule sets here, such as:
    'eslint:recommended',
    'plugin:import/recommended',
    '@open-wc/eslint-config',
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  overrides: [{
    rules: {
      'jest/no-test-callback': 'off',
      'jest/expect-expect': 'off',
      camelcase: 'off',
    },
    files: ['**/styles.js'],
  }],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      impliedStrict: true,
      experimentalDecorators: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    'jest/globals': true,
  },
  plugins: [
    'lit',
    'jest',
  ],
  rules: {
    'max-len': ['warn', { code: 160, ignoreUrls: true }],
    'lines-between-class-members': ['off'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.spec.js'] }],
  }
};
  