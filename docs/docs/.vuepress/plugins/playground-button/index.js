const { resolve } = require('path')

module.exports = {
  name: '@vue-cdk/vuepress-plugin/docs/playground-button',
  enhanceAppFiles: resolve(__dirname, 'enhance-vuepress-app.js'),
  globalUIComponents: [
    'PlaygroundButton'
  ]
}