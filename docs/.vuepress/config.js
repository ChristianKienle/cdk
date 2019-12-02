const ApiPlugin = require('./api-plugin')

module.exports = {
  chainWebpack: (config, isServer) => {
    config
    .resolveLoader.set('symlinks', true)
    // .modules.merge(modulePaths)
  config.resolve.set('symlinks', true)
    // config is an instance of ChainableConfig
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Components', link: '/components/',
        items: [
          { text: 'Virtualized List', link: '/components/virtualized-list.md' },
          { text: 'Link', link: '/components/link/' }
        ]
      },
    ]
  },
  plugins: [
    'vuepress-plugin-clean-urls',
    [ApiPlugin, {
      'virtualized-list': require.resolve('@vue-cdk/virtualized-list/src/virtualized-list.vue'),
      'link': require.resolve('@vue-cdk/link/src/link.vue')
    }]
  ]
}