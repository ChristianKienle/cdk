// @ts-check
const { resolve } = require('path')
// @ts-ignore
const name = require('./../package.json').name
const ExamplesPlugin = require('./plugins/examples')
const ExamplesSrcPlugin = require('./plugins/source')

module.exports = options => ({
  name,
  enhanceAppFiles: resolve(__dirname, 'enhance-app.js'),
  plugins: [ExamplesPlugin(options), ExamplesSrcPlugin(options)]
})
