import { configure } from '@storybook/vue';
// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
// Vue Component Development Kit Imports
import VirtualizedList from '@vue-cdk/virtualized-list';
import '@vue-cdk/virtualized-list-css/index.css';
import Popover from '@vue-cdk/popover';
import Link from '@vue-cdk/link';
import Portal from '@vue-cdk/portal';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/'
    }
  ]
})
Vue.use(VueRouter)
Vue.use(VirtualizedList);
Vue.use(Popover);
Vue.use(Link);
Vue.use(Portal);

configure(require.context('../src', true, /\.*.stories.js/), module);
