// @ts-check
/**
 * @param {string} path
 * @param {object} params
 */
module.exports = (path, params = {}) => {
  const query = Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')
  cy.visit(`${path}?${query}`)
}
