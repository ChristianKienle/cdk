module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/__tests__/**/*.test.js'],
  coverageDirectory: '.coverage',
  collectCoverageFrom: [
    'packages/**/*.{js,vue}',
    // do not collect coverage from:
    '!**/node_modules/**', // node_modules
    '!docs/**', // docs
    '!**/__tests__/**/*.test.js', // tests
    '!**/__tests__/**/*.e2e.js', // end to end tests
    '!**/__tests__/pages/*' // e2e test pages
  ],
  coverageReporters: ['html', 'json', 'lcov', 'clover']
}
