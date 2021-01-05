const createBase = require('./create-rollup.config.base')
const assert = require('assert')
const assertValidMainFieldValue = require('./assert-valid-main-field-value')

const createConfig = (pkg) => {
  const base = createBase(pkg)
  const file = pkg.main
  assert(file, `main must be set for package ${pkg.name}`)
  assertValidMainFieldValue(file)
  return Object.assign({}, base, {
    output: {
      file,
      exports: 'named',
      name: pkg.name,
      format: 'umd',
      sourcemap: true,
    },
  })
}

module.exports = createConfig
