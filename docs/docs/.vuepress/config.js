const ApiPlugin = require('./api-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  base: '/cdk/',
  chainWebpack: (config, isServer) => {
    config.resolve.set('symlinks', true)
    // config.resolve.alias.set('@linusborg/vue-simple-portal', require.resolve('@linusborg/vue-simple-portal'))
    // config
    // .plugin('webpack-analyzer')
    // .usew(BundleAnalyzerPlugin, [
    //   {
    //     analyzerPort: 10001,
    //     openAnalyzer: true
    //   }
    // ])
    // .end()
  },
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
        text: 'Components', link: '/components/',
        items: [
          { text: 'List', link: '/components/list/' },
          { text: 'Link', link: '/components/link/' },
          { text: 'Popover', link: '/components/popover/' },
          { text: 'Client Only', link: '/components/client-only/' },
          { text: 'Match Media', link: '/components/match-media/' }
        ]
      },
      { text: 'Customizing', link: '/customizing/' }
    ]
  },
  plugins: [
    [
      "container",
      {
        type: "example",
        before: info => `<div class="example__rendered"><demo-${info} /></div>`,
        after: ""
      }
    ],
    [ApiPlugin, {
      'list': require.resolve('@vue-cdk/list/src/list.vue'),
      'list-item': require.resolve('@vue-cdk/list/src/item.vue'),
      'link': require.resolve('@vue-cdk/link/src/link.vue'),
      'popover': require.resolve('@vue-cdk/popover/src/popover.vue'),
      'client-only': require.resolve('@vue-cdk/client-only/src/client-only.vue')
    }]
  ]
}