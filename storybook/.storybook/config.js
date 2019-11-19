import { configure } from '@storybook/vue';
import VirtualizedList from '@vue-cdk/virtualized-list';
import Vue from 'vue';
import './vl.css';

Vue.use(VirtualizedList);

configure(require.context('../src', true, /\.stories\.js$/), module);
