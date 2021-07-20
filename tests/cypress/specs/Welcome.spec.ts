describe('Welcome', () => {
  it('should render the title on the page', () => {
    cy.visit('/');
    cy.get('[data-test-id=welcome]').should('be.visible');
  });
});
