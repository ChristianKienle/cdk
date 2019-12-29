const getComponents = require('./../../get-components')
const devalue = require('devalue')
const { resolve } = require('path')

module.exports = {
  name: '@vue-cdk/vuepress-plugin/docs/components',
  enhanceAppFiles: resolve(__dirname, 'enhance-vuepress-app.js'),
  clientDynamicModules() {
    return {
      name: 'vue-cdk/docs/components.js',
      content: `export const components = ${devalue(getComponents())} `
    }
  }
}