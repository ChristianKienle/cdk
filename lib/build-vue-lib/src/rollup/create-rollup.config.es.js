const createBase = require('./create-rollup.config.base')

const createConfig = (pkg) => {
  const base = createBase(pkg)

  return Object.assign({}, base, {
    output: {
      name: pkg.name,
      file: pkg.module,
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
