const { babel } = require('@rollup/plugin-babel')
const resolve = require('@rollup/plugin-node-resolve')
const vue = require('rollup-plugin-vue')
const cjs = require('@rollup/plugin-commonjs')
const replace = require('@rollup/plugin-replace')
// const eslint = require('@rollup/plugin-eslint')
const css = require('rollup-plugin-css-only')
const autoprefixer = require('autoprefixer')
const fs = require('fs-extra')
const CleanCSS = require('clean-css')
// const eslintConfig = require('../../../../.eslintrc.js')

/**
 * @param {{ version: string }} options
 */
const create = ({ version }) => ({
  input: 'src/index.js',
  plugins: [
    resolve({
      mainFields: ['module', 'jsnext', 'main', 'browser'],
    }),
    // For now eslint is disabled because we already have `yarn lint` (from the root).
    // The rollup eslint plugin reports false positives (for whatever reason)
    // eslint(eslintConfig),
    vue({
      css: false,
      style: {
        postcssPlugins: [autoprefixer],
      },
    }),
    css({
      output: (styles) => {
        fs.ensureDirSync('dist')
        fs.writeFileSync('dist/styles.css', new CleanCSS().minify(styles).styles)
      },
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    cjs(),
    replace({
      VERSION: JSON.stringify(version),
    }),
  ],
  watch: {
    include: 'src/**',
  },
  external: ['vue'],
})

module.exports = create
