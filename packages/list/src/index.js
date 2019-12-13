import List from './list.vue'
import ListItem from './item.vue'
import VueObserveVisibility from 'vue-observe-visibility'
import pluginify from '@vue-cdk/pluginify'

import Single from './selection/single'
import Multiple from './selection/multiple'

const plugin = pluginify(List, ListItem)

function install(vue, options) {
  vue.use(VueObserveVisibility, options)
  vue.use(plugin, options)
}

export const SelectionMode = { Single, Multiple }

export default install
