import { configure, addParameters } from '@storybook/vue';
// import '@storybook/addon-console'

// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
// Vue Component Development Kit Imports – Styles
import '@vue-cdk/list-style/index.css';
// Vue Component Development Kit Imports – Components
import List from '@vue-cdk/list';
import InfiniteScroll from '@vue-cdk/infinite-scroll';
import Popover from '@vue-cdk/popover';
import Link from '@vue-cdk/link';
import Portal from '@vue-cdk/portal';
import ScrollContainer from '@vue-cdk/scroll-container';

addParameters({
  backgrounds: [
    { name: 'dark', value: '#241A30' },
    { name: 'light', value: '#F0F0F0' },
    { name: 'black', value: '#000' },
    { name: 'white', value: '#FFF' },
  ],
});

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/'
    }
  ]
})
Vue.use(VueRouter)
Vue.use(List);
Vue.use(InfiniteScroll);
Vue.use(Popover);
Vue.use(Link);
Vue.use(Portal);
Vue.use(ScrollContainer);

configure(require.context('../src', true, /\.*.stories.js/), module);
