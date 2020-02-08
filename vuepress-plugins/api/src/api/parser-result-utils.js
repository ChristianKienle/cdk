// @ts-check
/**
 * @typedef {import('@vuese/parser').ParserResult} ParserResult
 */
/** @param {ParserResult} result */
const getDescription = result => {
  const { componentDesc = { default: [] } } = result
  return componentDesc.default
}

/**
 * @param {ParserResult} result
 * @returns {string | null}
 */
const $getDescription = result => {
  const description = getDescription(result)
  return description.length === 0 ? null : description.join('\n')
}

module.exports = {
  $getDescription,
  getDescription
}
