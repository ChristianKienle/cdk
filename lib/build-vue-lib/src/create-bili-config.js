// @ts-check
const { join } = require('path')
const fs = require('fs-extra')

/**
 * @param {import('./../index').BuildVueLibRequest} request
 * @returns {import('bili').Config}
 */
module.exports = request => {
  const pkgFile = join(request.rootDir, 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf-8'))
  const name = pkg.name
  const version = pkg.version
  const format = [
    // 'cjs',
    'umd-min',
    'umd',
    'es',
    'es-min'
  ]
  return {
    bundleNodeModules: true,
    extendRollupConfig: config => {
      config.inputConfig.preserveSymlinks = true
      return config
    },
    banner: `
/**
 * ${name}
 * Version: ${version},
 * (c) Christian Kienle, ${new Date().getFullYear()}
 * LICENCE: MIT
 * https://github.com/ChristianKienle/cdk
*/`,
    babel: {
      configFile: join(__dirname, 'bili-babel.config'),
      // runtimeHelpers: true
      babelHelpers: 'inline' // 'runtime' causes error
    },
    resolvePlugins: {
      visualize: require('rollup-plugin-visualizer')
    },
    plugins: {
      visualize: true,
      vue: true,
      commonjs: true,
      babel: {
        babelHelpers: 'inline' // 'runtime' causes error
        // runtimeHelpers: true
      }
    },
    output: {
      format,
      // This will generate a single css file for all the custom styles we need in Fundamental Vue.
      extractCSS: true,
      dir: join(request.rootDir, 'dist'),
      moduleName: name,
      fileName: context => `index.${context.format}${context.minify ? '.min' : ''}.js`
    },
    globals: {
      vue: 'Vue'
    }
  }
}
