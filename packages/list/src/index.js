import List from './list.vue'
import ListItem from './item.vue'
import VueObserveVisibility from 'vue-observe-visibility'

function install(vue) {
  vue.use(VueObserveVisibility)
  vue.component('CList', List)
  vue.component('CListItem', ListItem)
}

export default { install }
