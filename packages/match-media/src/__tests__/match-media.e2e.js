// @ts-check
const { visitPage, visitStart, getDataCy } = require('@vue-cdk/e2e-utils')

describe('match-media', () => {
  it('adjusts to viewport', () => {
    visitStart()
    cy.viewport(100, 1000)
    visitPage('/match-media/match-media')
    cy.viewport(2000, 1000)
    cy.viewport(100, 1000)
    getDataCy('mini').contains('true')
    cy.viewport(550, 1000)
    getDataCy('compact').contains('true')
    cy.viewport(650, 1000)
    getDataCy('regular').contains('true')
  })

  // This test does not change the viewport after the initial load. We expect the values to be correct even without a resize. The match-media mixin had this issue for quite a while that it required a resize for the values to be correct.
  it('reports correct values even without a viewport change', () => {
    visitStart()
    cy.viewport(100, 1000)
    visitPage('/match-media/match-media')
    getDataCy('mini').contains('true')
    getDataCy('compact').contains('false')
    getDataCy('regular').contains('false')
  })
})
