import { configure, addParameters } from '@storybook/vue';

// Dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'
// Vue Component Development Kit Imports – Styles
import '@vue-cdk/list/style/index.css'
// Vue Component Development Kit Imports – Components
import ClientOnly from '@vue-cdk/client-only'
import FocusTrap from '@vue-cdk/focus-trap'
import InfiniteScroll from '@vue-cdk/infinite-scroll'
import InteractionOutside from '@vue-cdk/interaction-outside'
import Link from '@vue-cdk/link'
import List from '@vue-cdk/list'
import Popover from '@vue-cdk/popover'
import Portal from '@vue-cdk/portal'
import ScrollContainer from '@vue-cdk/scroll-container'
import Tooltip from '@vue-cdk/tooltip'

addParameters({
  backgrounds: [
    { name: 'dark', value: '#241A30' },
    { name: 'light', value: '#F0F0F0' },
    { name: 'black', value: '#000' },
    { name: 'white', value: '#FFF' }
  ]
})

Vue.use(VueRouter)
Vue.use(ClientOnly)
Vue.use(FocusTrap)
Vue.use(InfiniteScroll)
Vue.use(InteractionOutside)
Vue.use(Link)
Vue.use(List)
Vue.use(Popover)
Vue.use(Portal)
Vue.use(ScrollContainer)
Vue.use(Tooltip)

configure(require.context('../src', true, /\.*.stories.js/), module)
