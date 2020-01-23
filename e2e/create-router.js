import VueRouter from 'vue-router'
import { importPage, pageKeys } from './pages'

const routePages = pageKeys.map(pageKey => {
  const { component, name, route } = importPage(pageKey)
  const path = `/pages/${name}`
  return {
    ...route,
    component,
    path,
    name: path
  }
})

export default () => {
  const overview = {
    component: () => import('./overview.vue'),
    path: '/',
    props: {
      pages: [...routePages]
    }
  }
  const start = {
    component: () => import('./start.vue'),
    path: '/start'
  }

  return new VueRouter({
    mode: 'history',
    routes: [start, overview,...routePages]
  })
}