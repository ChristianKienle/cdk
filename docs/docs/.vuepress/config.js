// @ts-check
const path = require('path')
const ApiPluginOptions = require('./api-plugin.config')
const getComponents = require('./get-components')
const plugins = require('./plugins')

const base = process.env.VCDK_BASE || '/cdk/'

const packagesDir = path.posix.join(__dirname, '..', '..', '..', 'packages')

console.log(`Using base: '${base}'`)

module.exports = {
  title: 'Vue Component Development Kit',
  description: 'Vue Components to make Vue Components',
  base,
  extraWatchFiles: [
    `${packagesDir}/**/__examples__/**/*.vue`,
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
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }
    ],
    [
      "link",
      { rel: "shortcut-icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ],
  themeConfig: {
    smoothScroll: true,
    search: false,
    repo: 'christiankienle/cdk',
    repoLabel: 'GitHub',
    docsDir: 'docs/docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: true,
    displayAllHeaders: true,
    logo: '/logo-small@1x.png',
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Components',
        link: '/components/',
        items: getComponents().map(item => ({
          text: item.name,
          link: `/components/${item.slug}/`
        }))
      },
      { text: 'API', link: '/api/' },
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
    ...plugins.all,
    ['@vue-cdk/vuepress-plugin-demo', {
      examplesPattern: '**/__examples__/**/*.vue',
      cwd: path.resolve(__dirname, '..', '..', '..', 'packages'),
      playground: {
        package: require('./playground-package'),
        setupModule: {
          code:
            `import Link from '@vue-cdk/link'
import FocusTrap from '@vue-cdk/focus-trap'
import Autocomplete from '@vue-cdk/autocomplete'
import ClientOnly from '@vue-cdk/client-only'
import InfiniteScroll from '@vue-cdk/infinite-scroll'
import InteractionOutside from '@vue-cdk/interaction-outside'
import List from '@vue-cdk/list'
import Modal from '@vue-cdk/modal'
import Popover from '@vue-cdk/popover'
import Portal from '@vue-cdk/portal'
import ScrollContainer from '@vue-cdk/scroll-container'
import Tooltip from '@vue-cdk/tooltip'
import VueRouter from 'vue-router'

export default ({ Vue }) => {
  Vue.use(VueRouter)
  Vue.config.productionTip = false
  Vue.use(Link)
  Vue.use(Autocomplete)
  Vue.use(FocusTrap)
  Vue.use(ClientOnly)
  Vue.use(InfiniteScroll)
  Vue.use(List)
  Vue.use(InteractionOutside)
  Vue.use(Modal)
  Vue.use(Popover)
  Vue.use(Portal)
  Vue.use(ScrollContainer)
  Vue.use(Tooltip)
}
`
        }
      }
    }],
    ['@vue-cdk/vuepress-plugin-api', ApiPluginOptions]
  ]
}
