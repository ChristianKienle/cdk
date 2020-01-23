// @ts-check
/// <reference types="cypress" />
const { getDataCy, visitPage, visitStart } = require('@vue-cdk/e2e-utils')

describe('client only component', () => {
  it('renders default slot', () => {
    visitStart()
    visitPage('/client-only/client-only')
    getDataCy('client').should('have.text', 'hello browser')
    getDataCy('all').should('have.text', 'hello all')
  })
})
