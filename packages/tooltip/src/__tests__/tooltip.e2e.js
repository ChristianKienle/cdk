// @ts-check
/// <reference types="cypress" />

import { getDataCy, visitPage, visitStart } from '@vue-cdk/e2e-utils'

describe('Tooltip', () => {
  it('shows and hides tooltip on hover', () => {
    visitStart()
    visitPage('/tooltip/default')
    getDataCy('button').should('be.visible')
    cy.get('.vcdk-popover-body').should('not.exist')
    getDataCy('button').trigger('mouseenter')
    cy.get('.vcdk-popover-body')
      .should('exist')
      .and('be.visible')
    getDataCy('button').trigger('mouseleave')
    cy.get('.vcdk-popover-body').should('not.exist')
  })

  it('shows and hides tooltip with custom content on hover', () => {
    visitStart()
    visitPage('/tooltip/custom-content')
    getDataCy('button').should('be.visible')
    cy.get('.vcdk-popover-body').should('not.exist')
    getDataCy('content').should('not.exist')
    getDataCy('button').trigger('mouseenter')
    cy.get('.vcdk-popover-body')
      .should('exist')
      .and('be.visible')
    getDataCy('content')
      .should('exist')
      .and('be.visible')
    getDataCy('button').trigger('mouseleave')
    cy.get('.vcdk-popover-body').should('not.exist')
    getDataCy('content').should('not.exist')
  })

  it('shows and hides light tooltip on hover', () => {
    visitStart()
    visitPage('/tooltip/default-light')
    getDataCy('button').should('be.visible')
    cy.get('.vcdk-popover-theme-tooltip-light.vcdk-popover-body').should('not.exist')
    getDataCy('button').trigger('mouseenter')
    cy.get('.vcdk-popover-theme-tooltip-light.vcdk-popover-body')
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'I am light a Tooltip')
    getDataCy('button').trigger('mouseleave')
    cy.get('.vcdk-popover-theme-tooltip-light.vcdk-popover-body').should('not.exist')
  })
})
