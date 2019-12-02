
// @ts-check
/* eslint-env node */
const { Render } = require('@vuese/markdown-render')
const assert = require('assert').strict

/** @param {import("@vuese/parser").ParserResult} componentApi */
const render = componentApi => {
  assert(componentApi != null)
  assert(typeof componentApi === 'object')
  const result = new Render(componentApi)
  const md = result.renderMarkdown()
  if (md == null) {
    throw Error(`Unable to render API for component ${componentApi} because 'renderMarkdown' returned 'null'.`)
  }
  return md.content
}

module.exports = render
