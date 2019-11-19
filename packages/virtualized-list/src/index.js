import VirtualizedList from './virtualized-list.vue'
import VueVirtualScroller from 'vue-virtual-scroller'
import VueObserveVisibility from 'vue-observe-visibility'

function install(vue) {
  vue.use(VueVirtualScroller)
  vue.use(VueObserveVisibility)
  vue.component('VirtualizedList', VirtualizedList)
}

export default { install }
