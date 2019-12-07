// @ts-check
import MediaQueryObserver from './media-query-observer'

/**
 * @param {string[]} keys
 * @return {{[key: string]: false}}
 */
const optionSetWithKeys = keys => {
  const obj = /** @type {{[key: string]: false}} */ ({})
  keys.forEach(key => (obj[key] = false))
  return obj
}

/** @typedef {{[name: string]: string}} NamedQueries */
/** @typedef {import("vue").VueConstructor} VueCtor */
/**
 * @typedef {object} Options
 * @prop {VueCtor} Vue
 */

/**
 * @param {NamedQueries} namedQueries
 * @param {Options} options
 */
export default {
  provide() {
    return {
      $vcdkMq: this.vcdkMq
    }
  },
  data() {
    return {
      // We initilize this with the media query names + the special key $all.
      // The value of the query names will initially be false.
      // $all will be set to [].
      // That way vcdkMq is fully reactive from the get go.
      vcdkMq: { ...optionSetWithKeys(Object.keys(this.$options.vcdkMediaQueriesByName)), $all: [] }
    }
  },
  created() {
    Object.entries(this.$options.vcdkMediaQueriesByName).forEach(([name, query]) => {
      const observer = new MediaQueryObserver(query, matches => {
        this.vcdkMq[name] = matches
        const $all = new Set([...this.vcdkMq.$all])
        if (matches) {
          $all.add(name)
        } else {
          $all.delete(name)
        }
        // Remove duplicates + sort (hopefully stable).
        this.vcdkMq.$all = Array.from($all.values()).sort()
      })
      // startObservation will execute the callback without actually a change happening.
      observer.startObservation()
    })
  }
}
