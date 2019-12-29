import Link from '@vue-cdk/link'
import FocusTrap from '@vue-cdk/focus-trap'
import Popover from '@vue-cdk/popover'
import ScrollContainer from '@vue-cdk/scroll-container'
import InfiniteScroll from '@vue-cdk/infinite-scroll'
import List from '@vue-cdk/list'
import '@vue-cdk/infinite-scroll/style/index.css'
import vue from 'vue'

vue.config.devtools = true

export default ({ Vue }) => {
  Vue.use(Link)
  Vue.use(Popover)
  Vue.use(List)
  Vue.use(FocusTrap)
  Vue.use(InfiniteScroll)
  Vue.use(ScrollContainer)
}
