// @ts-check
const { visitPage, visitStart, getDataCy } = require('@vue-cdk/e2e-utils')

/** @param {number} index */
const getItemWithIndex = (index) => cy.get(`[data-cy-index=${index}]`)

describe('list component', () => {
  it('renders something', () => {
    visitPage('/list/default')
    getDataCy('list').should('exist')
  })

  // This test verifies that sizeDependencies are respected. This is done by loading a list that displays items. The height of each item is a prop of the item. By filling out a form the test changes the height of the first item so that most other items should disappear. If sizeDependencies were not respected the height of the item would change but List would not apply a new transform and not move the other items out of the way.
  it('respects size-dependencies', () => {
    visitPage('/list/size-dependencies')
    getDataCy('list').should('exist')
    getDataCy('list').get('[data-cy=item] div:visible').should('have.length.gte', 10)
    getDataCy('item-id-input').clear().type('1')
    getDataCy('item-height').clear().type('100')
    getDataCy('set-height-button').click()
    getDataCy('list').get('[data-cy=item] div:visible').should('have.length.gte', 6)
  })

  it('works with 1 initial item (eg. does not show loading indicator)', () => {
    visitStart()
    visitPage('/list/configurable', { numberOfInitialItems: 1, batchSize: 5 })
    getDataCy('list').should('exist')
    cy.get('[data-cy=item]').should('have.have.length', 1)
  })

  it('works without initial items', () => {
    visitStart()
    visitPage('/list/configurable', { numberOfInitialItems: 0 })
    getDataCy('list').should('exist')
    cy.get('[data-cy=item]').should('have.have.length', 0)
  })

  it('supports single selection mode', () => {
    visitStart()
    visitPage('/list/configurable', {
      height: 200,
      itemHeight: 20,
      numberOfInitialItems: 10,
      selectionMode: 'single',
    })
    getDataCy('list').should('exist')
    getDataCy('item').should('have.length', 10)
    // initially we expect there to be no selected item
    cy.get('[data-cy-selected="true"]').should('have.have.length', 0)

    // Now we get and item and select it and assert:
    // – that the selection is actually there…
    getItemWithIndex(1).click().should('have.attr', 'data-cy-selected', 'true')
    // - and that there is only a single selected item
    cy.get('[data-cy-selected="true"]').should('have.have.length', 1)
    getItemWithIndex(1).should('have.attr', 'data-cy-selected', 'true')

    // Now we click it again and hope that the selection is removed and that there is no selection in the list
    getItemWithIndex(1).click().should('have.attr', 'data-cy-selected', 'false')
    cy.get('[data-cy-selected="true"]').should('have.have.length', 0)

    // Now we click two different items and assert that there is only a single selected item
    getItemWithIndex(5).click().should('have.attr', 'data-cy-selected', 'true')
    cy.get('[data-cy-selected="true"]').should('have.have.length', 1)
    getItemWithIndex(6).click().should('have.attr', 'data-cy-selected', 'true')
    cy.get('[data-cy-selected="true"]').should('have.have.length', 1)
  })

  it('supports multiple selection mode', () => {
    visitStart()
    visitPage('/list/configurable', {
      height: 200,
      itemHeight: 20,
      numberOfInitialItems: 10,
      selectionMode: 'multiple',
    })
    getDataCy('list').should('exist')
    getDataCy('item').should('have.length', 10)
    // initially we expect there to be no selected item
    cy.get('[data-cy-selected="true"]').should('have.have.length', 0)

    // Now we get and item and select it and assert:
    // – that the selection is actually there…
    getItemWithIndex(1).click().should('have.attr', 'data-cy-selected', 'true')
    // - and that there is only a single selected item
    cy.get('[data-cy-selected="true"]').should('have.have.length', 1)
    getItemWithIndex(1).should('have.attr', 'data-cy-selected', 'true')

    // Now we click it again and hope that the selection is removed and that there is no selection in the list
    getItemWithIndex(1).click().should('have.attr', 'data-cy-selected', 'false')
    cy.get('[data-cy-selected="true"]').should('have.have.length', 0)

    // Now we click two different items and assert that those items are in fact selected
    getItemWithIndex(5).click().should('have.attr', 'data-cy-selected', 'true')
    cy.get('[data-cy-selected="true"]').should('have.have.length', 1)
    getItemWithIndex(6).click().should('have.attr', 'data-cy-selected', 'true')
    cy.get('[data-cy-selected="true"]').should('have.have.length', 2)
  })
})
