// @ts-check
/* eslint-env node */
const fromCode = require('./from-code')
const { existsSync, readFileSync } = require('fs')
const assert = require('assert')

/**
 * @param {string} file
 * @returns {import("@vuese/parser").ParserResult=}
 */
module.exports = file => {
  assert(typeof file === 'string')

  if (existsSync(file) === false) {
    console.error(`Cannot get API from component at ${file} because this file does not exist.`)
    return
  }
  const code = readFileSync(file, 'utf-8')
  const result = fromCode(code)
  if (result.name == null || result.name === '') {
    console.warn(`Component at file ${file} has no name.`)
  }
  return result
}
