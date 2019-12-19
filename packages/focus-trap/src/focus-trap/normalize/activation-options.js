// @ts-check

/** @typedef {import('./../../../types/focus-trap')._ActivateOptions} _ActivateOptions */
/** @typedef {import('./../../../types/focus-trap').ActivateOptions} ActivateOptions */
/** @typedef {import('./../../../types/focus-trap').Trapable} Trapable */

/**
 * @param {Trapable} trapable
 * @returns {_ActivateOptions}
 */
const createDefaultOptions = trapable => ({
  initialFocus: trapable.$el,
  deactivation: 'on-esc',
  onDeactivate: () => {}
})

/**
 * @param {Trapable} trapable
 * @param {ActivateOptions} options
 * @returns {_ActivateOptions}
 */
export default (trapable, options = {}) => {
  return {
    ...createDefaultOptions(trapable),
    ...options
  }
}
