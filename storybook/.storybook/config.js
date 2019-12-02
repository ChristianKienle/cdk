import { configure } from '@storybook/vue';
import VirtualizedList from '@vue-cdk/virtualized-list';
import Popover from '@vue-cdk/popover';
import Link from '@vue-cdk/link';
import Vue from 'vue';
import './vl.css';

Vue.use(VirtualizedList);
Vue.use(Popover);
Vue.use(Link);

configure(require.context('../src', true, /\.*.stories.js/), module);
