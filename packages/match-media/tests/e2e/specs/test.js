describe('match-media', () => {
  it('adjusts to viewport', () => {
    cy.visit('/')
    cy.viewport(100, 1000)
    // cy.dataCy('match').contains('true')
    // cy.viewport(1000, 1000)
    // cy.dataCy('match').contains('false')
  })
})
