import List from './list.vue'
import ListItem from './item.vue'
import VueObserveVisibility from 'vue-observe-visibility'
import pluginify from '@vue-cdk/pluginify'

const plugin = pluginify(List, ListItem)

function install(vue, options) {
  vue.use(VueObserveVisibility, options)
  vue.use(plugin, options)
}

export default install
