// @ts-check

describe('client only component', () => {
  it('renders default slot', () => {
    cy.visit('/client-only')
    cy.dataCy('client').should('have.text', 'hello browser')
    cy.dataCy('all').should('have.text', 'hello all')
  })
})
