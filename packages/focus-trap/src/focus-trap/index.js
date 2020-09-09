// @ts-check
import { createFocusTrap } from 'focus-trap'
import normalizeActivationOptions from './normalize/activation-options'
/** @typedef {import('./../../types/focus-trap').Trapable} Trapable */

export default class FocusTrap {
  /** @param {Trapable} trapable */
  constructor(trapable) {
    this.trapable = trapable
  }

  /** @param {import('./../../types/focus-trap').ActivateOptions} options */
  activate(options) {
    const _options = normalizeActivationOptions(this.trapable, options)
    const el = /** @type {HTMLElement} */ (this.trapable.$el)
    this.trap = createFocusTrap(el, {
      initialFocus: /** @type {HTMLElement} */ (_options.initialFocus),
      escapeDeactivates: _options.deactivation === 'on-esc',
      onDeactivate: () => {
        _options.onDeactivate()
      },
      returnFocusOnDeactivate: false
    })
    this.trap.activate()
  }
  deactivate() {
    this.trap.deactivate()
  }
}
