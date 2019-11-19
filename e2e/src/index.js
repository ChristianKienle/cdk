import Vue from 'vue'
import MediaQueryObserver from './media-query-observer'

export default namedQueries => {
  const names = Object.keys(namedQueries)
  const mq = Vue.observable({})

  names.forEach(name => {
    Vue.set(mq, name, false)
  })

  Vue.set(mq, '$all', [])

  const entries = Object.entries(namedQueries)
  const matchingQueries = new Set()

  entries.forEach(([name, query]) => {
    const observer = new MediaQueryObserver(query, matches => {
      Vue.set(mq, name, matches)
      if (matches) {
        matchingQueries.add(name)
      } else {
        matchingQueries.delete(name)
      }
      const sortedMatchingQueries = Array.from(matchingQueries.values()).sort()
      Vue.set(mq, '$all', sortedMatchingQueries)
    })
    observer.startObservation()
  })

  return {
    beforeCreate() {
      this.$mq = mq
    },
    provide() {
      return {
        $mq: mq
      }
    }
  }
}

