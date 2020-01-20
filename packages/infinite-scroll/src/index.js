import InfiniteScroll from './infinite-scroll.vue'
import InfiniteScrollItem from './item.vue'
import pluginify from '@vue-cdk/pluginify'

export default pluginify(InfiniteScroll, InfiniteScrollItem)

export { InfiniteScroll, InfiniteScrollItem }
