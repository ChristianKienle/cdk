import Link from '@vue-cdk/link'
import Autocomplete from '@vue-cdk/autocomplete'
import FocusTrap from '@vue-cdk/focus-trap'
import Popover from '@vue-cdk/popover'
import ScrollContainer from '@vue-cdk/scroll-container'
import InfiniteScroll from '@vue-cdk/infinite-scroll'
import Modal from '@vue-cdk/modal'
import InteractionOutside from '@vue-cdk/interaction-outside'
import Tooltip from '@vue-cdk/tooltip'
import List from '@vue-cdk/list'
import '@vue-cdk/infinite-scroll/style/index.css'
import vue from 'vue'

vue.config.devtools = true

const options = {
  onDidRegisterComponent({ name }) {
    console.log(`did register component ${name}`)
  }
}

export default ({ Vue }) => {
  const plugins = [Autocomplete, InteractionOutside, Tooltip, Link, Popover, List, FocusTrap, Modal, InfiniteScroll, ScrollContainer,]
  plugins.forEach(plugin => Vue.use(plugin, options))
}
