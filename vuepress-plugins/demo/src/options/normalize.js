// @ts-check
const { create } = require('./default')
const joi = require('@hapi/joi')

const SCHEMA = (() => {
  const defaultOptions = create()
  return joi
    .object({
      cwd: joi.string().default(defaultOptions.cwd),
      exampleNameFromPath: joi.function().default(() => defaultOptions.exampleNameFromPath),
      packageNameFromPath: joi.function().default(() => defaultOptions.packageNameFromPath),
      collectionPathComponentsFromPath: joi
        .function()
        .default(() => defaultOptions.collectionPathComponentsFromPath),
      examplesPattern: joi.string().default(defaultOptions.examplesPattern),
      playground: joi.alternatives([
        false,
        joi.object({
          package: joi.object().default({}),
          setupModule: joi.object({
            code: joi.string()
          })
        })
      ])
    })
    .default(defaultOptions)
})()

/**
 * @param {import('./types').Options} options
 * @returns {import('./types')._Options}
 */
module.exports = (options = create()) => {
  const { error } = SCHEMA.validate(options)
  if (error != null) {
    // eslint-disable-next-line no-console
    console.error(error)
    return create()
  }
  if ('cwd' in options || 'examplesPattern' in options) {
    const { exampleNameFromPath, packageNameFromPath, collectionPathComponentsFromPath } = create()

    return {
      exampleNameFromPath,
      packageNameFromPath,
      collectionPathComponentsFromPath,
      ...create(),
      ...options
    }
  }
  return create()
}
