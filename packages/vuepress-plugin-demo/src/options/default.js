// @ts-check
const { sep, parse } = require('path')

const EXAMPLES_DIR_NAME = '__examples__'

/**
 * @param {string} path
 * @returns {string[]}
 */
const pathComponentsFromPath = path => path.split(sep)

/**
 * @param {string} path
 * @returns {boolean}
 */
const isNotVueFilename = path => !path.endsWith('.vue')

/** @param {string} path */
const isInvalidExamplesPath = path =>
  !path.includes(EXAMPLES_DIR_NAME) || path.startsWith(EXAMPLES_DIR_NAME) || isNotVueFilename(path)

const collectionPathComponentsFromPath = path => {
  if (isInvalidExamplesPath(path)) {
    return
  }
  const pathComponents = pathComponentsFromPath(path)
  const separatorIndex = pathComponents.indexOf(EXAMPLES_DIR_NAME)
  const relevantPathComponents = pathComponents.slice(separatorIndex + 1)
  return relevantPathComponents.filter(isNotVueFilename)
}

const packageNameFromPath = path => {
  if (isInvalidExamplesPath(path)) {
    return
  }
  const pathComponents = pathComponentsFromPath(path)
  const separatorIndex = pathComponents.indexOf(EXAMPLES_DIR_NAME)
  return pathComponents[separatorIndex - 1]
}

const exampleFilenameBaseFromPath = path => {
  if (isInvalidExamplesPath(path)) {
    return
  }
  return parse(path).base
}

const exampleNameFromPath = path => {
  if (isInvalidExamplesPath(path)) {
    return
  }
  return parse(path).name
}

/**
 * @returns {import('./types')._Options}
 */
const create = () => {
  const cwd = process.cwd()
  return {
    cwd,
    examplesPattern: '**/__examples__/**/*.vue',
    exampleNameFromPath,
    packageNameFromPath,
    collectionPathComponentsFromPath
  }
}

module.exports = {
  collectionPathComponentsFromPath,
  packageNameFromPath,
  exampleFilenameBaseFromPath,
  exampleNameFromPath,
  create
}
