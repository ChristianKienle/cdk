import { onServer } from '@vue-cdk/utils'

export default class MediaQueryObserver {
  constructor(query, cb) {
    this.query = query
    this.cb = cb
    this.queryList = null
    this._stopObservation = () => {}
  }
  startObservation() {
    if(onServer()) {
      return
    }
    const { query, cb } = this
    this.queryList = window.matchMedia(query)
    const handleChange = event => {
      const matches = event.matches
      cb(matches)
    }
    this._stopObservation = () => {
      this.queryList.removeEventListener('change', handleChange)
      this.queryList = null
    }
    this.queryList.addEventListener('change', handleChange)
  }
  stopObservation() {
    this._stopObservation()
    this._stopObservation = () => {}
  }
}
