import InfiniteScroll from './infinite-scroll.vue'
import InfiniteScrollItem from './item.vue'
import VueObserveVisibility from 'vue-observe-visibility'

function install(vue) {
  vue.use(VueObserveVisibility)
  vue.component('CInfiniteScroll', InfiniteScroll)
  vue.component('CInfiniteScrollItem', InfiniteScrollItem)
}

export default install
