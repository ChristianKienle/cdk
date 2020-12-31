const createBase = require('./create-rollup.config.base')

const createConfig = (pkg) => {
  const base = createBase(pkg)

  return Object.assign({}, base, {
    output: {
      exports: 'named',
      name: pkg.name,
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
    },
  })
}

module.exports = createConfig
