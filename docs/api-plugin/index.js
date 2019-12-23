const { fromFile, renderer } = require('./api')

module.exports = options => {
  return {
    name: 'api-plugin',
    additionalPages() {
      return Object.entries(options).map(([name, path]) => ({
        relative: `api/${name}/README.md`,
        content: renderer.Default(fromFile(path))
      }))
    }
  }
}
