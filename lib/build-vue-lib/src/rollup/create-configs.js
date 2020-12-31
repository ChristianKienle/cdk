const createBrowserConfig = require('./create-rollup.config.browser')
const createEsConfig = require('./create-rollup.config.es')
const createUmdConfig = require('./create-rollup.config.umd')

module.exports = (pkg) => {
  const browserConfig = createBrowserConfig(pkg)
  const esmConfig = createEsConfig(pkg)
  const umdConfig = createUmdConfig(pkg)
  return {
    browserConfig,
    esmConfig,
    umdConfig,
  }
}
