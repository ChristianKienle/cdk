import List from './list.vue'
import ListItem from './item.vue'
import pluginify from '@vue-cdk/pluginify'
import Single from './selection/single'
import Multiple from './selection/multiple'

const SelectionMode = { Single, Multiple }

export default pluginify(List, ListItem)
export { List, ListItem, SelectionMode }
