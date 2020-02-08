// @ts-check
const toPascalCase = require('@vue-cdk/node-utils/to-pascal-case')

/** @param {string} component */
const withoutExtension = component => component.replace('.vue', '')

/** @param {string[]} pathComponents */
module.exports = (pathComponents = []) => {
  return pathComponents
    .map(withoutExtension)
    .map(toPascalCase)
    .join('-')
}
