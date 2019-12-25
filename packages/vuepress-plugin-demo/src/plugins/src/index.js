// @ts-check
// @ts-ignore
const name = /** @type {string} */ (require('./../../../package.json').name + '-src')
const globby = require('globby')
const { resolve, join, relative } = require('path')
const fs = require('fs-extra')
const toPascalCase = require('@vue-cdk/node-utils/to-pascal-case')
const normalizeOptions = require('./normalize-options')

module.exports = options => ({
  name,
  async additionalPages() {
    const { dir } = normalizeOptions(options)
    const paths = await globby('**/*.vue', { cwd: dir })

    const createContent = async relativePath => {
      const absolutePath = join(dir, relativePath)
      const fileContent = await fs.readFile(absolutePath, 'utf-8')
      return '```markup\n' + fileContent + '\n```'
    }

    const createPage = async relativePath => {
      const defaultName = relativePath
        .replace('.vue', '')
        .split('/')
        .map(toPascalCase)
        .join('-')
      const content = await createContent(relativePath)
      return {
        content,
        frontmatter: {
          examplePath: relativePath
        },
        relative: `example-src/${relativePath.replace('.vue', '')}/README.md`
      }
    }
    return await Promise.all(paths.map(createPage))
  }
})
