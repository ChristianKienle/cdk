// @ts-check
import isBrowser from '@vue-cdk/utils/is-browser'
import createEventListener from './create-event-listener'

/** @param {() => {}} callback */
export default callback => {
  return createEventListener('keyup', document, event => {
    if (event.key === 'Escape') {
      callback()
    }
  })
}
