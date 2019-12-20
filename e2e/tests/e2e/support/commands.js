Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`)
})

Cypress.Commands.add('typeTab', (shiftKey, ctrlKey) => {
 return cy.focused().trigger('keydown', {
      keyCode: 9,
      which: 9,
      code: 'Tab',
      shiftKey: shiftKey,
      ctrlKey: ctrlKey
  });
});