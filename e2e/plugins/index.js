const { join } = require('path')
const testDir = join(process.cwd(), 'packages', '**', '__tests__', '*.e2e.js')
console.log({testDir})
module.exports = (on, config) => {
  return Object.assign({}, config, {
    fixturesFolder: 'e2e/fixtures',
    integrationFolder: 'packages',
    screenshotsFolder: 'e2e/screenshots',
    videosFolder: 'e2e/videos',
    supportFile: 'e2e/support/index.js',
    testFiles: testDir
  })
}
