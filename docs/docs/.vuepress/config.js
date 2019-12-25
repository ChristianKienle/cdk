// @ts-check
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
    ...ApiPluginOptions.items.map(item => item.localPath)
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
    repo: 'christiankienle/cdk',
    repoLabel: 'GitHub',
    docsDir: 'docs/docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: true,
    displayAllHeaders: true,
    logo: '/logo.png',
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      {
        text: 'Misc',
        items: [
          { text: 'VuePress Plugins', link: '/misc/vuepress-plugins/' },
          { text: 'Customizing', link: '/customizing/' }
        ]
      }
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
    ['@vue-cdk/vuepress-plugin-api', ApiPluginOptions]
  ]
}