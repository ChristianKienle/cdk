/// <reference types="@vue-cdk/e2e" />
import { getDataCy, visitPage, visitStart } from '@vue-cdk/e2e-utils'

describe('interaction-outside component', () => {
  it('works', () => {
    visitStart()
    visitPage('/interaction-outside/default', {})
    getDataCy('lastDetectedInteraction').should('contain.text', 'none')

    // Clicks outside should not do anything by default
    getDataCy('outside').click()
    getDataCy('lastDetectedInteraction')
      .should('contain.text', 'none')
      .and('not.to.contain.text', 'outside')

    // Activate the outside detection
    getDataCy('activeCheckbox').check()

    // Now make sure it really works
    getDataCy('outside').click()
    getDataCy('lastDetectedInteraction').should('contain.text', 'outside')

    getDataCy('inside').click()
    getDataCy('lastDetectedInteraction').should('contain.text', 'inside')

    // Try clicking the body
    cy.log('Try clicking the body')
    cy.get('body').click('bottom')
    getDataCy('lastDetectedInteraction').should('contain.text', 'outside')
  })

  it('respects ignored elements', () => {
    visitStart()
    visitPage('/interaction-outside/default', {})
    getDataCy('lastDetectedInteraction').should('contain.text', 'none')
    // Activate the outside detection
    getDataCy('activeCheckbox').check()

    // Click Inside
    getDataCy('inside').click()
    getDataCy('lastDetectedInteraction').should('contain.text', 'inside')

    // Click on the ignored container
    getDataCy('always-ignored').click()
    getDataCy('lastDetectedInteraction').should('contain.text', 'inside')

    // Click on the self-destructing ignored-el
    getDataCy('inner-ignored').click()
    getDataCy('lastDetectedInteraction').should('contain.text', 'inside')

    // Now make sure it still works
    cy.log('Try clicking the body')
    cy.get('body').click('bottom')
    getDataCy('lastDetectedInteraction').should('contain.text', 'outside')
  })
})
