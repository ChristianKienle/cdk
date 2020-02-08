// @ts-check
const globby = require('globby')
const { join } = require('path')
const fs = require('fs-extra')
const Options = require('./../../options')

module.exports = options => ({
  // @ts-ignore
  name: require('./../../../package.json').name + '-src',
  additionalPages() {
    const {
      cwd,
      examplesPattern,
      collectionPathComponentsFromPath,
      packageNameFromPath,
      exampleNameFromPath
    } = Options.normalize(options)

    const relativePaths = globby.sync(examplesPattern, {
      ignore: ['**/__tests__/**'],
      absolute: false,
      cwd
    })
    const createContent = absolutePath => {
      const fileContent = fs.readFileSync(absolutePath, 'utf-8')
      return '```markup\n' + fileContent + '\n```'
    }
    const createPage = relativePath => {
      const absolutePath = join(cwd, relativePath)
      const packageName = packageNameFromPath(absolutePath)
      const collectionComponents = collectionPathComponentsFromPath(absolutePath)
      const exampleName = exampleNameFromPath(absolutePath)
      const content = createContent(absolutePath)
      const collectionSep = collectionComponents.length === 0 ? '' : '/'

      return {
        content,
        frontmatter: {
          vcdkExample: {
            packageName,
            collectionComponents,
            exampleName
          },
          examplePath: `${packageName}/${collectionComponents.join(
            '/'
          )}${collectionSep}${exampleName}`
        },
        relative: `example-src/${packageName}/${collectionComponents.join(
          '/'
        )}${collectionSep}${exampleName}/README.md`
      }
    }

    return relativePaths.map(createPage)
  }
})
