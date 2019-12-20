// @ts-check
describe('focus trap', () => {
  it('works', () => {
    cy.visit('/focus-trap/default')
    cy.dataCy('input-outside').focus()
    cy.focused().should('have.attr', 'data-cy' , 'input-outside')
    cy.dataCy('trap-button').click()
    cy.focused().should('have.attr', 'data-cy' , 'input-a')
  })

  // This test simply traps the focus within a component and verifies that elements outside cannot be focused while the trap is active.
  it('CFocusTrap Component works', () => {
    cy.visit('/focus-trap/component')
    cy.dataCy('inputOutside').focus()
    cy.focused().should('have.attr', 'data-cy', 'inputOutside')
    cy.dataCy('activate').click()
    cy.dataCy('inputInside').click()
    cy.focused().should('have.attr', 'data-cy', 'inputInside')
    cy.dataCy('inputOutside').click()
    cy.focused().should('have.attr', 'data-cy', 'inputInside')
    cy.dataCy('deactivate').click()
    cy.dataCy('inputOutside').click()
    cy.focused().should('have.attr', 'data-cy', 'inputOutside')
  })
})
