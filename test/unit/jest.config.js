module.exports = {
  transform: {
    // Process js with babel-jest
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: '@happy-dom/jest-environment',
  setupFilesAfterEnv: ['<rootDir>/test/unit/setup.js'],
  moduleFileExtensions: ['js'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@open-wc|lit-element|@lit|lit-html|lit|@happy-dom|@webcomponents)/)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/unit/fileMock.js',
    '\\.(css|less|scss|sss|styl)$': 
            '<rootDir>/node_modules/jest-css-modules',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.stories.js',
    '!src/**/styles.js',
    '!**/node_modules/**',
  ],
  rootDir: '../../',
  // Requires testRegex instead of testMatch for jenkins to find matches
  testRegex: '\\.spec\\.js$',
  coverageDirectory: 'test/unit/reports/coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
    src: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
  