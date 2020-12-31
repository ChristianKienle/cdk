const createBase = require('./create-rollup.config.base')
const { terser } = require('rollup-plugin-terser')

const createConfig = (pkg) => {
  const base = createBase(pkg)

  const config = Object.assign({}, base, {
    output: {
      exports: 'named',
      name: pkg.name,
      file: pkg.unpkg,
      format: 'iife',
      sourcemap: true,
    },
  })

  config.plugins.push(terser({}))
  return config
}

module.exports = createConfig
