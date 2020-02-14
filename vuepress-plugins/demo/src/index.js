// @ts-check
const { resolve } = require('path')
// @ts-ignore
const name = require('./../package.json').name
const ExamplesPlugin = require('./plugins/examples')
const ExamplesSrcPlugin = require('./plugins/source')
const devalue = require('devalue')

module.exports = options => ({
  name,
  clientDynamicModules() {
    return {
      name: 'vue-cdk-demo-playground.js',
      content: `
      export default ${devalue(options.playground)}
      `
    }
  },
  enhanceAppFiles: resolve(__dirname, 'enhance-app.js'),
  plugins: [ExamplesPlugin(options), ExamplesSrcPlugin(options)]
})
