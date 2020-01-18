import Vue from 'vue'
import App from './app.vue'
import Router from 'vue-router'
import List from '@vue-cdk/list'
import FocusTrap from '@vue-cdk/focus-trap'

Vue.config.devtools = true
/** @param {string | number | null} value */
const _toInt = value => {
  if (Number.isSafeInteger(value)) {
    return value
  }
  if (typeof value === 'number') {
    return value //Math.round(value)
  }
  // Here we should have a string.
  // We still call toString() to also support objects and stuff
  return Number.parseInt(value.toString(), 10)
}

/**
 * @param {string | number | null} value
 * @param {(string | number | null)=} fallbackValue
 */
const toInt = (value, fallbackValue) => {
  if (value == null && fallbackValue == null) {
    throw new Error(`toInt(…) requires either a value as the first arg or a valid fallback value as the second arg.`)
  }
  return _toInt(value == null ? fallbackValue : value)
}

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
      path: '/list/configurable',
      component: () => import('./pages/list/configurable.vue'),
      props({ query }) {
        const itemHeight = toInt(query.itemHeight, 18)
        const height = toInt(query.height, 10 * itemHeight)
        const { numberOfInitialItems, batchSize } = query
        return {
          itemHeight,
          height,
          numberOfInitialItems: toInt(numberOfInitialItems, 0),
          batchSize: toInt(batchSize, 10),
          selectionMode: query.selectionMode || 'single'
        }
      },
    },
    {
      path: '/list/size-dependencies',
      component: () => import('./pages/list/size-dependencies.vue')
    },
    {
      path: '/focus-trap/default',
      component: () => import('./pages/focus-trap/default.vue')
    },
    {
      path: '/focus-trap/component',
      component: () => import('./pages/focus-trap/component.vue')
    },
    {
      path: '/popover/default',
      component: () => import('./pages/popover/default.vue')
    },
    {
      path: '/popover/prop',
      component: () => import('./pages/popover/prop.vue')
    },
    {
      path: '/modal/default',
      component: () => import('./pages/modal/default.vue')
    },
    {
      path: '/modal/cleanup',
      component: () => import('./pages/modal/cleanup.vue')
    },
    {
      path: '/modal/custom-overlay',
      component: () => import('./pages/modal/custom-overlay.vue')
    }
  ]
})

Vue.use(List)
Vue.use(FocusTrap)
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