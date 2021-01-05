const createBase = require('./create-rollup.config.base')
const { terser } = require('rollup-plugin-terser')
const assert = require('assert')
const assertValidMainFieldValue = require('./assert-valid-main-field-value')
const getBrowserModuleName = require('./get-browser-module-name')

const createConfig = (pkg) => {
  const base = createBase(pkg)
  const file = pkg.unpkg
  assertValidMainFieldValue(file)
  const name = getBrowserModuleName(pkg)
  assert(file, `unpkg must be set for package ${pkg.name}`)
  const config = Object.assign({}, base, {
    output: {
      file,
      name,
      exports: 'named',
      format: 'iife',
      sourcemap: true,
    },
  })

  config.plugins.push(terser({}))
  return config
}

module.exports = createConfig
