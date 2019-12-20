// @ts-check
const ApiPlugin = require('./../../api-plugin')
const ExamplesPlugin = require('./../../examples-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const toPascalCase = require('@vue-cdk/node-utils/to-pascal-case')

const base = process.env.VCDK_BASE || '/cdk/'

const GlobalUIPlugin = {
  name: 'Global UI Plugin',
  globalUIComponents: [
    'PlaygroundButton'
  ]
}

console.log(`Using base: '${base}'`)

module.exports = {
  base,
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
        componentsDir: path.resolve(__dirname, '..', '..', '..','examples'),
        getComponentName(file) {
          const defaultName = file.replace(/\/|\\/g, '-')
          const components = file.split('/')
          const name = `Example-${components.map(toPascalCase).join('-')}`
          return name
        }
      }
    ],
    [ExamplesPlugin],
    [ApiPlugin, {
      'list': require.resolve('@vue-cdk/list/src/list.vue'),
      'list-item': require.resolve('@vue-cdk/list/src/item.vue'),
      'infinite-scroll': require.resolve('@vue-cdk/infinite-scroll/src/infinite-scroll.vue'),
      'infinite-scroll-item': require.resolve('@vue-cdk/infinite-scroll/src/item.vue'),
      'scroll-container': require.resolve('@vue-cdk/scroll-container/src/scroll-container.vue'),
      'link': require.resolve('@vue-cdk/link/src/link.vue'),
      'popover': require.resolve('@vue-cdk/popover/src/popover.vue'),
      'client-only': require.resolve('@vue-cdk/client-only/src/client-only.vue'),
      'focus-trap': require.resolve('@vue-cdk/focus-trap/src/components/focus-trap.vue')
    }]
  ]
}