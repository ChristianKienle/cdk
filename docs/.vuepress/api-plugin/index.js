const { fromFile, renderer } = require('./api')

module.exports = (options, ctx) => {
  return {
    name: 'api-plugin',
    additionalPages() {
      return Object.entries(options).map(([name, path]) => {
        console.log('name/path', name, path)
        const result = fromFile(path);
        const mdContent = renderer.Default(result)
        return {
          path: `/api/${name}`,
          content: mdContent
        }
      })
    }
  }
}