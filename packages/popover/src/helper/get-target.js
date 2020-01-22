// @ts-check
const REFS_PREFIX = '$refs.'

/**
 * @typedef {object} Options
 * @prop {string | (() => Element)} target
 * @prop {any} vm
 */

/**
 * @param {Options} options
 */
export default ({ vm, target }) => {
  if (target == null) {
    return
  }
  if (typeof target === 'string') {
    if (target.startsWith(REFS_PREFIX)) {
      const refName = target.substring(REFS_PREFIX.length)
      return vm.$refs[refName]
    }
  }
  if (typeof target === 'function') {
    return target()
  }
}
