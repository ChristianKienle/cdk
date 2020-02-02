// @ts-check
/// <reference types="cypress" />

const queryString = require('query-string')
/**
 * @param {string} path
 * @param {object} params
 */
module.exports = (path, params = {}) => {
  const baseUrl = Cypress.config('baseUrl')
  const pagePath = `/pages${path}`
  const url = new URL(pagePath, baseUrl)

  const _params = {
    vcdkConfig: true,
    ...params
  }
  const search =
    Object.entries(params).length === 0
      ? ''
      : `?${queryString.stringify(_params, { arrayFormat: 'comma' })}`

  // url.search = new URLSearchParams(params).toString()
  url.search = search
  cy.visit(url.toString())
}
