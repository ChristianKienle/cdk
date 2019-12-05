// @ts-check
const ApiPlugin = require('./../../api-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const toPascalCase = require('@vue-cdk/node-utils/to-pascal-case')

module.exports = {
  base: '/cdk/',
  // chainWebpack: (config, isServer) => {
  //   // config.resolve.set('symlinks', true)
  //   // config.resolve.alias.set('@linusborg/vue-simple-portal', require.resolve('@linusborg/vue-simple-portal'))
  //   // config
  //   // .plugin('webpack-analyzer')
  //   // .usew(BundleAnalyzerPlugin, [
  //   //   {
  //   //     analyzerPort: 10001,
  //   //     openAnalyzer: true
  //   //   }
  //   // ])
  //   // .end()
  // },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        vue$: "vue/dist/vue.js"
      }
    }
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Components', link: '/components',
        items: [
          { text: 'List', link: '/components/list/' },
          { text: 'Link', link: '/components/link/' },
          { text: 'Popover', link: '/components/popover/' },
          { text: 'Client Only', link: '/components/client-only/' },
          { text: 'Match Media', link: '/components/match-media/' },
          { text: 'Scroll Container', link: '/components/scroll-container/' }
        ]
      },
      { text: 'Customizing', link: '/customizing/' }
    ]
  },
  plugins: [
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
    [
      "container",
      {
        type: "example",
        before: info => `

         <Example-${info} />


        `,
        after: ""
      }
    ],
    [
      "container",
      {
        type: "expandable",
        before: info => `
        <details>
        <summary>${info}</summary>

        `,
        after:  "</details>"
      }
    ],
    [ApiPlugin, {
      'list': require.resolve('@vue-cdk/list/src/list.vue'),
      'list-item': require.resolve('@vue-cdk/list/src/item.vue'),
      'scroll-container': require.resolve('@vue-cdk/scroll-container/src/scroll-container.vue'),
      'link': require.resolve('@vue-cdk/link/src/link.vue'),
      'popover': require.resolve('@vue-cdk/popover/src/popover.vue'),
      'client-only': require.resolve('@vue-cdk/client-only/src/client-only.vue')
    }]
  ]
}