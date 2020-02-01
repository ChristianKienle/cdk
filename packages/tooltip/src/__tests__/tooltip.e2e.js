// @ts-check
/// <reference types="cypress" />
import { getDataCy, visitPage, visitStart } from '@vue-cdk/e2e-utils'

// Utils
const popoverBody = () => cy.get('.vcdk-popover-body')
const tooltipTarget = () => getDataCy('button')

// Tests
describe('Tooltip', () => {
  it('shows and hides tooltip on hover', () => {
    visitStart()
    visitPage('/tooltip/default')

    tooltipTarget().should('be.visible')
    popoverBody().should('not.exist')
    tooltipTarget().trigger('mouseenter')
    popoverBody().should('have.attr', 'role', 'tooltip')
    popoverBody()
      .should('exist')
      .and('be.visible')
    tooltipTarget().trigger('mouseleave')
    popoverBody().should('not.exist')
  })

  // This requirement was inferred from https://github.com/scottaohara/a11y_tooltips
  // > A user should be able to hit the escape key to close a tooltip, regardless of if that tooltip was opened by focus or hover of an element.
  it('hides tooltip on keydown.esc', () => {
    visitStart()
    visitPage('/tooltip/default')

    tooltipTarget().should('be.visible')
    popoverBody().should('not.exist')
    tooltipTarget().trigger('mouseenter')
    popoverBody()
      .should('exist')
      .and('be.visible')
    tooltipTarget().trigger('keyup', { key: 'Escape' })
    popoverBody().should('not.exist')
  })

  // This requirement was inferred from https://github.com/scottaohara/a11y_tooltips
  // > If you have a keyboard setup to work with your touch device, then the tooltips should be revealed when their trigger receives keyboard focus.
  it('shows tooltip on focus and hides it again on blur', () => {
    visitStart()
    visitPage('/tooltip/default')
    tooltipTarget().should('be.visible')
    popoverBody().should('not.exist')
    tooltipTarget().focus()
    popoverBody()
      .should('exist')
      .and('be.visible')
    tooltipTarget().blur()
    popoverBody().should('not.exist')
  })

  it('shows and hides tooltip with custom content on hover', () => {
    visitStart()
    visitPage('/tooltip/custom-content')
    tooltipTarget().should('be.visible')
    popoverBody().should('not.exist')
    getDataCy('content').should('not.exist')
    tooltipTarget().trigger('mouseenter')
    popoverBody()
      .should('exist')
      .and('be.visible')
    getDataCy('content')
      .should('exist')
      .and('be.visible')
    tooltipTarget().trigger('mouseleave')
    popoverBody().should('not.exist')
    getDataCy('content').should('not.exist')
  })

  it('shows and hides light tooltip on hover', () => {
    visitStart()
    visitPage('/tooltip/default-light')
    tooltipTarget().should('be.visible')
    cy.get('.vcdk-popover-theme-tooltip-light.vcdk-popover-body').should('not.exist')
    tooltipTarget().trigger('mouseenter')
    cy.get('.vcdk-popover-theme-tooltip-light.vcdk-popover-body')
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'I am light a Tooltip')
    tooltipTarget().trigger('mouseleave')
    cy.get('.vcdk-popover-theme-tooltip-light.vcdk-popover-body').should('not.exist')
  })
})
