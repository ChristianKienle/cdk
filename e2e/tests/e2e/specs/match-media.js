// @ts-check

describe('match-media', () => {
  it('adjusts to viewport', () => {
    cy.visit('/match-media')
    cy.viewport(2000, 1000)
    cy.wait(1000)
    cy.viewport(100, 1000)
    cy.dataCy('mini').contains('true')
    cy.viewport(550, 1000)
    cy.dataCy('compact').contains('true')
    cy.viewport(650, 1000)
    cy.dataCy('regular').contains('true')
  })
})
