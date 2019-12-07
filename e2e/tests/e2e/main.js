import Vue from 'vue'
import App from './app.vue'
import Router from 'vue-router'
import List from '@vue-cdk/list'

Vue.config.devtools = true

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./pages/start.vue')
    },
    {
      path: '/match-media',
      component: () => import('./pages/match-media.vue')
    },
    {
      path: '/client-only',
      component: () => import('./pages/client-only.vue')
    },
    {
      path: '/list/default',
      component: () => import('./pages/list/default.vue')
    },
    {
      path: '/list/initial-items',
      component: () => import('./pages/list/initial-items.vue')
    },
    {
      path: '/list/size-dependencies',
      component: () => import('./pages/list/size-dependencies.vue')
    }
  ]
})

Vue.use(List)
Vue.use(Router)

new Vue({
  router,
  render(h) {
    return h(App)
  }
}).$mount('#app')
