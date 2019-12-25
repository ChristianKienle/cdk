// @ts-check
const visitPage = require('./../utils/visit-page')
const visitStart = require('./../utils/visit-start')

describe('popover component', () => {
  it('creates a container without any height', () => {
    visitStart()
    visitPage('/popover/default')
    cy.dataCy('popover').should('exist')
    cy.get('body').then(body => {
      cy.wrap(body.find('#vcdk-popover-portal-container').first()).invoke({log: true},'height').should('eq', 0)
    })
  })
})
