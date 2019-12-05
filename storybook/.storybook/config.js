import { configure, addParameters } from '@storybook/vue';
import '@storybook/addon-console'

// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
// Vue Component Development Kit Imports
import '@vue-cdk/list-style/index.css';
import List from '@vue-cdk/list';
import Popover from '@vue-cdk/popover';
import Link from '@vue-cdk/link';
import Portal from '@vue-cdk/portal';
import ScrollContainer from '@vue-cdk/scroll-container';

addParameters({
  backgrounds: [
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
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
Vue.use(Popover);
Vue.use(Link);
Vue.use(Portal);
Vue.use(ScrollContainer);

configure(require.context('../src', true, /\.*.stories.js/), module);
