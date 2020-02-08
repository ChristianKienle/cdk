// @ts-check
const globby = require('globby')
const componentNameFromComponents = require('./../component-name-from-components')

const Options = require('./../../options')

/** @param {import('./../../options/types').Options} options */
module.exports = options => {
  const _options = Options.normalize(options)

  const files = globby.sync(_options.examplesPattern, {
    ignore: ['**/__tests__/**'],
    absolute: true,
    cwd: _options.cwd
  })

  const { collectionPathComponentsFromPath, packageNameFromPath, exampleNameFromPath } = _options

  const exampleComponentNameComponentsFromPath = path => [
    'example',
    packageNameFromPath(path),
    ...collectionPathComponentsFromPath(path),
    exampleNameFromPath(path)
  ]

  const exampleComponentNameFromPath = path =>
    componentNameFromComponents(exampleComponentNameComponentsFromPath(path))
  const components = files.map(path => {
    return {
      path,
      name: exampleComponentNameFromPath(path)
    }
  })
  return {
    // @ts-ignore
    name: require('./../../../package.json').name + '-examples',
    plugins: [['@vuepress/register-components', { components }]]
  }
}
