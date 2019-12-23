/* eslint-env node */

const { version } = require('./package.json')
const Path = require('path')
const Process = require('process')

/** @type {import('bili').Config} */
module.exports = {
  banner: `
/**
 * Vue Component Development Kit
 * Version: ${version},
 * (c) Christian Kienle, 2019–${new Date().getFullYear()}
 * LICENCE: MIT
 * https://github.com/ChristianKienle/cdk
*/`,
  babel: {
    configFile: Path.join(__dirname, 'bili-babel.config.js'),
    babelrc: false
  },
  plugins: {
    vue: true,
    commonjs: true
  },
  output: {
    // This will generate a single css file for all the custom styles we need in Fundamental Vue.
    extractCSS: true
  },
  runtimeHelpers: true,
  globals: {
    vue: 'Vue'
  }
}
