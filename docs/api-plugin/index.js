const { fromFile, renderer } = require('./api')

module.exports = (options, ctx) => {
  return {
    name: 'api-plugin',
    additionalPages() {
      return Object.entries(options).map(([name, path]) => {
        const result = fromFile(path);
        const mdContent = renderer.Default(result)
        return {
          relative: `api/${name}/README.md`,
          // regularPath: `api/${name}/README.md`,
          content: mdContent
        }
      })
    }
  }
}