describe('E2E tests', function () {
  context('Public pages testing without login', function () {
    it('When user reaches app, must move to login page and then able to signup', function () {
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
    });
  });
});
