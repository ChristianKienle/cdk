// @ts-check
const ApiPlugin = require('./../../api-plugin')
const ExamplesPlugin = require('./../../examples-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const toPascalCase = require('@vue-cdk/node-utils/to-pascal-case')
const ApiPluginOptions = require('./api-plugin.config')

const base = process.env.VCDK_BASE || '/cdk/'

const GlobalUIPlugin = {
  name: 'Global UI Plugin',
  globalUIComponents: [
    'PlaygroundButton'
  ]
}
const examplesDir = path.resolve(__dirname, '..', '..', '..', 'examples')

console.log(`Using base: '${base}'`)

module.exports = {
  title: 'Vue Component Development Kit',
  base,
  extraWatchFiles: [
    `${examplesDir}/**/*.vue`,
    ...Object.values(ApiPluginOptions)
  ],
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        vue$: "vue/dist/vue.js"
      }
    }
  },
  themeConfig: {
    displayAllHeaders: true,
    logo: '/logo.png',
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Customizing', link: '/customizing/' }
    ]
  },
  plugins: [
    GlobalUIPlugin,
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '..', '..', '..', 'examples'),
        getComponentName(file) {
          const defaultName = file.replace(/\/|\\/g, '-')
          const components = file.split('/')
          const name = `Example-${components.map(toPascalCase).join('-')}`
          return name
        }
      }
    ],
    [ExamplesPlugin],
    [ApiPlugin, ApiPluginOptions]
  ]
}