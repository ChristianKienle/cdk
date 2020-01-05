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
})
