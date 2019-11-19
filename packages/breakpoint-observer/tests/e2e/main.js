import Vue from 'vue'
import BreakpointObserver from './../../src/index'
import App from './app.vue'

Vue.use(BreakpointObserver)

// const TestPage = {
//   render(h) {
//     return h('h1', {}, ['ihhi'])
//   }
// }


new Vue({
  render(h) {
    return h(App)
  }
}).$mount('#app')
