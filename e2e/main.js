import Vue from 'vue'
import App from './app.vue'
import Router from 'vue-router'
import List from '@vue-cdk/list'
import FocusTrap from '@vue-cdk/focus-trap'
import InteractionOutside from '@vue-cdk/interaction-outside'
import Tooltip from '@vue-cdk/tooltip'
import createRouter from './create-router'

Vue.config.devtools = true

const router = createRouter()

Vue.use(List)
Vue.use(FocusTrap)
Vue.use(Tooltip)
Vue.use(InteractionOutside)
Vue.use(Router)

const vm = new Vue({
  router,
  render(h) {
    return h(App)
  },
  methods: {
    goto(path, params = {}) {
      return new Promise(resolve => {
        router.push({
          path,
          // params,
          query: params
        }, resolve)
      })
    }
  }
}).$mount('#app')
window.vcdkGoto = (path, params) => vm.goto(path, params)