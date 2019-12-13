// @ts-check
module.exports = () => {
  // We not only get the start page we also wait for it to show
  // some kind of unique text that we know for sure "jupp the start page is here"
  cy.visit('/').get('h1').should('have.text', 'Start 1337')
}
