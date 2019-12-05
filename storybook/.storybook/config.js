import { configure, addParameters } from '@storybook/vue';
import '@storybook/addon-console'

// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
// Vue Component Development Kit Imports
import List from '@vue-cdk/list';
import '@vue-cdk/list-style/index.css';
import Popover from '@vue-cdk/popover';
import Link from '@vue-cdk/link';
import Portal from '@vue-cdk/portal';

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

configure(require.context('../src', true, /\.*.stories.js/), module);
