// @ts-check
const { visitPage, visitStart, getDataCy } = require('@vue-cdk/e2e-utils')

describe('focus trap', () => {
  it('works', () => {
    visitStart()
    visitPage('/focus-trap/default')
    getDataCy('input-outside').focus()
    cy.focused().should('have.attr', 'data-cy', 'input-outside')
    getDataCy('trap-button').click()
    cy.focused().should('have.attr', 'data-cy', 'input-a')
  })

  // This test simply traps the focus within a component and verifies that elements outside cannot be focused while the trap is active.
  it('CFocusTrap Component works', () => {
    visitStart()
    visitPage('/focus-trap/component')
    getDataCy('inputOutside').focus()
    cy.focused().should('have.attr', 'data-cy', 'inputOutside')
    getDataCy('activate').click()
    getDataCy('inputInside').click()
    cy.focused().should('have.attr', 'data-cy', 'inputInside')
    getDataCy('inputOutside').click()
    cy.focused().should('have.attr', 'data-cy', 'inputInside')
    getDataCy('deactivate').click()
    getDataCy('inputOutside').click()
    cy.focused().should('have.attr', 'data-cy', 'inputOutside')

    // one more thing:
    // activate the trap again, make sure we are trapped, then hit esc and make sure we are no longer trapped
    getDataCy('activate').click()
    getDataCy('inputInside').click()
    cy.focused().should('have.attr', 'data-cy', 'inputInside')
    cy.focused().type('{esc}')
    getDataCy('inputOutside').click()
    cy.focused().should('have.attr', 'data-cy', 'inputOutside')
  })
})
