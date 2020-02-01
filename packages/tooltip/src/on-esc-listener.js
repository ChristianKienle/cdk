// @ts-check
import createEventListener from './create-event-listener'

/**
 * @param {() => {}} callback
 * @param {{element?: HTMLElement }} options
 */
export default (callback, options = {}) => {
  const element = options.element || document
  return createEventListener('keyup', element, event => {
    if (event.key === 'Escape') {
      callback()
    }
  })
}
