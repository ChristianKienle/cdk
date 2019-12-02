import VirtualizedList from './virtualized-list.vue'
import VirtualizedListItem from './virtualized-list-item.vue'
// import VueVirtualScroller from 'vue-virtual-scroller'
import VueObserveVisibility from 'vue-observe-visibility'

function install(vue) {
  // vue.use(VueVirtualScroller)
  vue.use(VueObserveVisibility)
  vue.component('CVirtualizedList', VirtualizedList)
  vue.component('CVirtualizedListItem', VirtualizedListItem)
}

export default { install }
