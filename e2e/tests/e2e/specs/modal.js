// @ts-check
const { visitPage, getDataCy, visitStart } = require('./../utils')

describe('modal', () => {
  it('renders something', () => {
    visitStart()
    visitPage('/modal/default')
    getDataCy('modal').should('not.be.visible')
    getDataCy('button').click()
    getDataCy('modal').should('exist').and('be.visible')
    getDataCy('close-button').click()
    getDataCy('modal').should('not.be.visible')
  })

  it('renders modals lazily', () => {
    visitStart()
    visitPage('/modal/cleanup')

    // First we make sure that the tab items exist
    getDataCy('activateTabA').should('be.visible')
    getDataCy('activateTabB').should('be.visible')

    // Then we assert that there is no modal rendered yet
    cy.get('div[id^="modal-tab-"]').should('not.exist')

    // Now lets click the first tab item and assert that there is now a modal
    getDataCy('activateTabA').click()
    cy.get('div[id^="modal-tab-a"]').should('have.length', 1)

    // And that modal should not have any children yet
    cy.get('div[id^="modal-tab-a"]').children().should('have.length', 0)
  })

  it('cleans up modals', () => {
    visitStart()
    visitPage('/modal/cleanup')

    // First we make sure that the tab items exist
    getDataCy('activateTabA').should('be.visible')
    getDataCy('activateTabB').should('be.visible')

    // Then we assert that there is no modal rendered yet
    cy.get('div[id^="modal-tab-"]').should('not.exist')

    // Now lets click the first tab item and assert that there is now a modal
    getDataCy('activateTabA').click()
    cy.get('div[id^="modal-tab-a"]').should('have.length', 1)

    // Click tab item b and assert that there is a modal b
    getDataCy('activateTabB').click()
    cy.get('div[id^="modal-tab-b"]').should('have.length', 1)

    // Click tab item a again and assert that there is only one modal for a
    getDataCy('activateTabA').click()
    cy.get('div[id^="modal-tab-a"]').should('have.length', 1)

    // Click tab item b again and assert that there is only one modal for a
    getDataCy('activateTabB').click()
    cy.get('div[id^="modal-tab-b"]').should('have.length', 1)
  })

  it('renders custom overlay + constens lazily', () => {
    visitStart()
    visitPage('/modal/custom-overlay')

    getDataCy('openModalButton').should('be.visible')
    getDataCy('overlay').should('not.exist')
    getDataCy('modal').should('not.exist')
  })
})
