import ScrollContainer from './scroll-container.vue'
import pluginify from '@vue-cdk/pluginify'

const plugin = pluginify(ScrollContainer)

function install(vue, options) {
  vue.use(plugin, options)
}

export default install
