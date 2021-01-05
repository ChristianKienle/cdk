const createBase = require('./create-rollup.config.base')
const assert = require('assert')
const assertValidMainFieldValue = require('./assert-valid-main-field-value')

const createConfig = (pkg) => {
  const base = createBase(pkg)
  const file = pkg.module
  assert(file, `module must be set for package ${pkg.name}`)
  assertValidMainFieldValue(file)
  return Object.assign({}, base, {
    output: {
      file,
      name: pkg.name,
      format: 'es',
      sourcemap: true,
    },
    external: [
      ...base.external,
      // Additional externals here
    ],
  })
}

module.exports = createConfig
