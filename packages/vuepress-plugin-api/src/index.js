// @ts-check
const { fromFile, renderer } = require('./api')
// @ts-ignore
const name = require('./../package.json').name
const { resolve } = require('path')
const normalizeOptions = require('./normalize-options')
const { createMarkdown } = require('@vue-cdk/create-markdown')

module.exports = (options, context) => {
  const _options = normalizeOptions(options)
  return {
    name,
    enhanceAppFiles: resolve(__dirname, 'vuepress-enhance.js'),
    additionalPages() {
      const apiPages = _options.items.map(({ localPath, path: relative }) => {
        const api = fromFile(localPath)
        const content = renderer.Default(api)
        const frontmatter = {
          vcdkComponentApi: {
            name: api.name
          }
        }
        return {
          relative,
          content,
          frontmatter,
          api
        }
      })
      const createIndexPage = () => {
        const md = createMarkdown()
        const listItems = apiPages.map(page => page.relative)
        const list = apiPages
          .map(apiPage => {
            const renderApiButton = style =>
              `<ComponentApiButton for="${apiPage.api.name}" style="${style}"></ComponentApiButton>`
            const heading = `## ${apiPage.api.name} ${renderApiButton('margin-left: 5px;')}`
            const description = (() => {
              const { $description } = apiPage.api
              if ($description == null) {
                return ''
              }
              const rendered = context.markdown.render($description).html
              return `${rendered}\n\n<p>${renderApiButton('transform: scale(1.5);')}</p>\n`
            })()
            return `${heading}\n\n${description}\n`
          })
          .join('\n')
        const indexContent = md
          .h(1, 'API Reference')
          .nl(2)
          .raw(list)
          .nl(2)
          .render()
        return {
          frontmatter: {},
          relative: _options.indexPath,
          content: indexContent
        }
      }
      const indexPages = _options.indexPath == null ? [] : [createIndexPage()]
      return [...indexPages, ...apiPages]
    }
  }
}
