import Vue from 'vue'
import App from './app.vue'
import Router from 'vue-router'
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
      path: '/list',
      component: () => import('./pages/list.vue')
    }
  ]
})

Vue.use(Router)

new Vue({
  router,
  render(h) {
    return h(App)
  }
}).$mount('#app')
