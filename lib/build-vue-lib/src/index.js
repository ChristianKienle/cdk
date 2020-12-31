// @ts-check
const rollup = require('rollup')
const createRollupConfigs = require('./rollup/create-configs')
const fs = require('fs-extra')
const { join } = require('path')
/** @param {import('./../index').BuildVueLibRequest} request */
const buildVueLib = async ({ rootDir }) => {
  process.chdir(rootDir)
  const pkgPath = join(rootDir, 'package.json')

  const pkg = fs.readJSONSync(pkgPath)
  const { browserConfig, esmConfig, umdConfig } = createRollupConfigs(pkg)
  const build = async (config) => {
    const bundle = await rollup.rollup(config)
    await bundle.write(config.output)
  }
  return Promise.all([build(browserConfig), build(esmConfig), build(umdConfig)])
}

module.exports = buildVueLib
