// @ts-check
const createDefaultOptions = require('./create-default-options')

/**
 * @param {import('./types/options').Options} options
 * @returns {import('./types/options')._Options}
 */
module.exports = options => {
  const defaultOptions = createDefaultOptions()
  if (options == null) {
    return defaultOptions
  }
  if (typeof options !== 'object') {
    throw new Error(`options must be an object.`)
  }
  return {
    ...defaultOptions,
    ...options
  }
}
