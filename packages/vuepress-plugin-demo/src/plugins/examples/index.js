// @ts-check
// @ts-ignore
const { resolve, relative } = require('path')
const toPascalCase = require('@vue-cdk/node-utils/to-pascal-case')
const normalizeOptions = require('./normalize-options')

// @ts-ignore
const name = /** @type {string} */ (require('./../../../package.json').name + '-examples')

module.exports = options => {
  const _options = normalizeOptions(options)
  return {
    name,
    plugins: [
      [
        '@vuepress/register-components',
        {
          componentsDir: _options.dir,
          getComponentName(file) {
            const defaultName = file.replace(/\/|\\/g, '-')
            const components = file.split('/')
            return `Example-${components.map(toPascalCase).join('-')}`
          }
        }
      ]
    ]
  }
}
