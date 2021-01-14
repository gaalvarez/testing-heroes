describe('Add hero test', () => {
  it('Debería llenar el formulario', () => {
    cy.visit('/heroes');

    cy.get('input[name="hero-name"]').type('Agualongo').should('have.value', 'Agualongo');

    cy.get('#submit-add-hero').click();

    cy.get('ul').contains('Agualongo');
  });

  it('Debería navegar al detalle del hero', () => {
    cy.visit('/heroes');

    cy.get('a[ng-reflect-router-link="/detail/11"]').click();

    cy.get('input').should('have.value', 'Mr. Nice');
  });
});
