import Link from '@vue-cdk/link'
import Popover from '@vue-cdk/popover'
import ScrollContainer from '@vue-cdk/scroll-container'
import InfiniteScroll from '@vue-cdk/infinite-scroll'
import List from '@vue-cdk/list'
import '@vue-cdk/infinite-scroll/style/index.css'

import Demo from './demo.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('Demo', Demo)
  Vue.use(Link)
  Vue.use(Popover)
  Vue.use(List)
  Vue.use(InfiniteScroll)
  Vue.use(ScrollContainer)
}
