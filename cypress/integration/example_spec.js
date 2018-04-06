describe('Kitchen Sink', function () {
  it('.should() - assert that <title> is correct', function () {
    // https://on.cypress.io/visit
    cy.visit('http://localhost:4200');


    cy.get('.login-header span').should(($el) => {
      expect($el).to.contain('Welcome');
    });

    cy.get('.app-signup-button').click();

    cy.wait(100);
    cy.get('.app-signup-form-email').type('test@test.com');
    cy.get('.app-signup-form-password').type('123321');

    cy.wait(100);
    cy.get('.app-signup-form-submit').click();


    // cy.get('.ngx-menu-link-device').click();
    // cy.wait(100);
    // cy.get('.ngx-menu-link-device-create').click();
  })

   
})
