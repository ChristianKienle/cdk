// @ts-check
const REFS_PREFIX = '$refs.'

/**
 * @typedef {object} Options
 * @prop {string} trigger
 * @prop {any} vm
 */

/**
 * @param {Options} options
 */
export default ({ vm, trigger }) => {
  if (trigger == null) {
    return
  }
  if (typeof trigger === 'string') {
    if (trigger.startsWith(REFS_PREFIX)) {
      const refName = trigger.substring(REFS_PREFIX.length)
      return vm.$refs[refName]
    }
  }
}
