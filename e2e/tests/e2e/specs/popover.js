// @ts-check
const { visitPage, visitStart, getDataCy } = require('./../utils')

describe('popover component', () => {
  it('shows on click', () => {
    visitStart()
    visitPage('/popover/default')
    getDataCy('popoverBody').should('not.be.visible')
    getDataCy('toggleButton').click()
    getDataCy('popoverBody').should('be.visible')
  })

  it('creates a container without any height', () => {
    visitStart()
    visitPage('/popover/default')
    cy.dataCy('popover').should('exist')
    cy.get('body').then(body => {
      cy.wrap(body.find('#vcdk-popover-portal-container').first()).invoke({ log: true },'height').should('eq', 0)
    })
  })

  it('supports visible-prop', () => {
    visitStart()
    visitPage('/popover/prop')
    cy.dataCy('popover').should('not.exist')
    getDataCy('button').click()
    cy.dataCy('popover').should('be.visible')

  })
})
