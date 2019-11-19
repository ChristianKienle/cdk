import Vue from 'vue'
import App from './app.vue'
import Router from 'vue-router'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/match-media',
      component: () => import('./pages/match-media.vue')
    },
    {
      path: '/virtualized-list',
      component: () => import('./pages/virtualized-list.vue')
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
