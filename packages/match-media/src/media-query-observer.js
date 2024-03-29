// @ts-check
import { onServer } from '@vue-cdk/utils'

/** @typedef {function(boolean): void} ObserverCallback */

export default class MediaQueryObserver {
  /**
   * @param {string} query
   * @param {ObserverCallback} cb
   */
  constructor(query, cb) {
    this.query = query
    this.cb = cb
    this.queryList = null
    this._stopObservation = () => {}
  }
  /**
   * @param {MediaQueryListEvent} event
   */
  handleChange(event) {
    this.cb(event.matches)
  }

  startObservation() {
    if (onServer()) {
      return
    }
    const { query } = this
    this.queryList = window.matchMedia(query)
    this._stopObservation = () => {
      this.queryList.removeListener(this.handleChange.bind(this))
      this.queryList = null
    }
    this.cb(this.queryList.matches)
    this.queryList.addListener(this.handleChange.bind(this))
  }

  stopObservation() {
    this._stopObservation()
    this._stopObservation = () => {}
  }
}
