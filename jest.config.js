module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: [
    '/node_modules',
    '<rootDir>/(fixtures)/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/utils/test.js'
  ]
}
