describe('Client Page', () => {
  it('Should have a title', () => {
    cy.visit('localhost:3000');
    cy.title().should('contain', 'Phonotoy');

    cy.get('input[type=text]')
      .should('have.length', 1)
      .should('have.class', 'input-raw')
  });
});
