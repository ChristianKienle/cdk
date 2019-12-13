//https://github.com/FezVrasta/popper.js/issues/478
global.document = {}
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document
  }
})

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/__tests__/**/*.test.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/vue-virtual-scroller/src/components/*.vue'],
  modulePathIgnorePatterns: [
    // dist has to be ignored because it contains our build artefacts which should not be tested.
    '<rootDir>/dist'
  ],
  setupFiles: ['./jest.setup.js'],
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
