import InfiniteScroll from './infinite-scroll.vue'
import InfiniteScrollItem from './item.vue'
import VueObserveVisibility from 'vue-observe-visibility'
import pluginify from '@vue-cdk/pluginify'

const plugin = pluginify(InfiniteScroll, InfiniteScrollItem)

export default (vue, options) => {
  vue.use(plugin, options)
  vue.use(VueObserveVisibility, options)
}
