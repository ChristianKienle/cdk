/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Gets the element which has an attribute data-cy that has the value `value`
     * @example
     * cy.dataCy('button') will get <div data-cy="button">this</div>
     */
    dataCy(value: string): Chainable<any>
  }
}