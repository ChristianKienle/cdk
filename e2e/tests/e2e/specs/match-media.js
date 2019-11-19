describe('match-media', () => {
  it('adjusts to viewport', () => {
    cy.visit('/match-media')
    cy.viewport(100, 1000)
    cy.dataCy('mini').contains('true')
    cy.viewport(300, 1000)
    cy.dataCy('compact').contains('true')
    cy.viewport(500, 1000)
    cy.dataCy('regular').contains('true')
  })
})
