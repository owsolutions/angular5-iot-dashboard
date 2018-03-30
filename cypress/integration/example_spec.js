describe('Kitchen Sink', function () {
  it('.should() - assert that <title> is correct', function () {
    // https://on.cypress.io/visit
    cy.visit('http://localhost:4200')
    cy.get('.ngx-menu-link-device').click();
    cy.wait(100);
    cy.get('.ngx-menu-link-device-create').click();
  })

   
})
