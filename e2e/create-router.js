import VueRouter from 'vue-router'
import { importPage, pageKeys, pageFromKey } from './pages'
import * as queryString from 'query-string'

const pages = pageKeys.map(pageFromKey)
const pageRoutes = pages.map(page => {
  const { name, component, route } = importPage(page.key)
  return {
    props({query}) {
      return query
    },
    ...route,
    name,
    component,
    path: page.path,
  }
})

export default () => {
  const overview = {
    component: () => import('./overview.vue'),
    path: '/',
    props: {
      pages: [...pages]
    }
  }
  const start = {
    component: () => import('./start.vue'),
    path: '/start'
  }

  const sharedQueryOptions = {
    arrayFormat: 'comma'
  }
  const parseQuery = query => {
    const options = {
      ...sharedQueryOptions,
      parseNumbers: true,
      parseBooleans: true
    }

    const result = queryString.parse(query, options)
    return result
  }

  const stringifyQuery = queryObject => {
    const options = {
      ...sharedQueryOptions,
    }
    return '?' + queryString.stringify(queryObject, options)
  }

  return new VueRouter({
    stringifyQuery,
    parseQuery,
    mode: 'history',
    routes: [start, overview,...pageRoutes]
  })
}