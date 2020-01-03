// @ts-check
const { visitPage, visitStart } = require('./../utils')

describe('client only component', () => {
  it('renders default slot', () => {
    visitStart()
    visitPage('/client-only')
    cy.dataCy('client').should('have.text', 'hello browser')
    cy.dataCy('all').should('have.text', 'hello all')
  })
})
