const { fromFile, renderer } = require('./api')

const name = require('./../package.json').name
const { resolve } = require('path')

const normalizeOptions = require('./normalize-options')

module.exports = options => {
  const _options = normalizeOptions(options)
  return {
    name,
    additionalPages() {
      return _options.items.map(({ localPath, path }) => ({
        relative: path,
        content: renderer.Default(fromFile(localPath))
      }))
    }
  }
}
