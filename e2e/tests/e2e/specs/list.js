// @ts-check
describe('list component', () => {
  it('renders something', () => {
    cy.visit('/list/default')
    cy.dataCy('list').should('exist')
  })

  // This test verifies that sizeDependencies are respected. This is done by loading a list that displays items. The height of each item is a prop of the item. By filling out a form the test changes the height of the first item so that most other items should disappear. If sizeDependencies were not respected the height of the item would change but List would not apply a new transform and not move the other items out of the way.
  it('respects size-dependencies', () => {
    cy.visit('/list/size-dependencies')
    cy.dataCy('list').should('exist')
    cy.dataCy('list').get('[data-cy=item]:visible').should('have.length.gte', 10)
    cy.dataCy('item-id-input').clear().type('1')
    cy.dataCy('item-height').clear().type('100')
    cy.dataCy('set-height-button').click()
    cy.dataCy('list').get('[data-cy=item]:visible').should('have.length.gte', 6)
  })

  it('works without initial items', () => {
    cy.visit('/list/no-initial-items')
    cy.dataCy('list').get('[data-cy=item]').should('have.length', 0)
    cy.dataCy('loading').should('be.visible')

    // We don't do anything – no scrolling etc.
    // We simply expect there to be 5 items at some point.
    // The list always loads 5 items in a batch.
    cy.dataCy('list').get('[data-cy=item]').should('have.length', 5)
    // Now after the items are there we expect a loading indicator to show up.
    cy.dataCy('loading').should('be.visible')
    // Load 5 more and this time we expect there to not be a visible loading indicator because the list is configured in a way to only show 10 items at the same time. so the loading indicator would not fit in the bounds of the list.
    cy.dataCy('list').get('[data-cy=item]').should('have.length', 10)
    cy.dataCy('loading').should('not.be.visible')

    // Now we scroll to the bottom, expect the loading indicator to show up – until the next batch has been loaded. Then we scroll down to the bottom again – the loading indicator should show up again but more importantly – the last displayed item should be the one with id 14.
    cy.dataCy('list').scrollTo('bottom')
    cy.dataCy('loading').should('be.visible')
    cy.dataCy('loading').should('not.be.visible')
    cy.dataCy('list').scrollTo('bottom')
    cy.dataCy('item').last().should('have.data', 'id', 14)
  })
})
