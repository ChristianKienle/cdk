// @ts-check

/** @typedef {string | null | undefined} Value */

/**
 * @param {any} cls
 * @returns {boolean}
 */
const invalidClasses = (cls) => typeof cls === 'string' && cls.length > 0

/**
 * @param {Array.<Value>} classes
 * @returns {Array.<string> | null}
 */
const _classes = (classes) => {
  // Filter out null, undefined and ""
  const onlyClasses = classes.filter(invalidClasses)
  if (onlyClasses.length === 0) {
    return null
  }
  // @ts-ignore
  return onlyClasses
}

export default _classes
