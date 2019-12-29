import Demo from './components/demo/index.vue'
import VueClipboard from 'vue-clipboard2'
export default ({ Vue }) => {
  Vue.component('Demo', Demo)
  Vue.use(VueClipboard)
}
