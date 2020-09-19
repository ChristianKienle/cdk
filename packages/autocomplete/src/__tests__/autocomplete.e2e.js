// @ts-check
const { visitPage, visitStart, getDataCy } = require('@vue-cdk/e2e-utils')

describe('autocomplete component', () => {
  it('shows on click', () => {
    visitStart()
    visitPage('/autocomplete/default')
    getDataCy('item-aaa').should('not.be.visible')
    getDataCy('input').should('be.visible')

    // Click in the input and wait for the popover to show up
    getDataCy('input').click()
    getDataCy('item-aaa').should('be.visible')
    getDataCy('item-aab').should('be.visible')
    getDataCy('item-aac').should('be.visible')

    getDataCy('outer-input').click()
    getDataCy('item-aaa').should('not.be.visible')
    getDataCy('item-aab').should('not.be.visible')
    getDataCy('item-aac').should('not.be.visible')
  })
})
