// @ts-check

/**
 * @param {any} cls
 * @returns {boolean}
 */
const invalidClasses = cls => typeof cls === "string" && cls.length > 0

/**
 * @typedef {string | null | undefined} Value
 *
 * @returns {Array.<string> | null}
 * @param {Array.<Value>} classes
 */
const _classes = classes => {
  // Filter out null, undefined and ""
  const onlyClasses = classes.filter(invalidClasses)
  if(onlyClasses.length === 0) {
    return null
  }
  // @ts-ignore
  return onlyClasses
}

export default _classes
