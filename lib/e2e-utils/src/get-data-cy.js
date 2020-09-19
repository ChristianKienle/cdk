// @ts-check
/** @param {string} value */
module.exports = (value) => cy.get(`[data-cy=${value}]`)
