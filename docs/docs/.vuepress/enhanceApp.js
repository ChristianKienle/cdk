import Link from '@vue-cdk/link'
import Popover from '@vue-cdk/popover'
import ScrollContainer from '@vue-cdk/scroll-container'
import List from '@vue-cdk/list'
import '@vue-cdk/list-style/index.css'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Link)
  Vue.use(Popover)
  Vue.use(List)
  Vue.use(ScrollContainer)
}
