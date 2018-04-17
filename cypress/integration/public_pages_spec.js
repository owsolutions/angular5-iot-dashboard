describe('E2E tests', function () {
  context('Authentication and public pages', function () {
    beforeEach(() => {
      cy.visit('http://localhost:4200');
    });
    it('As a user, I must be able to signup using an email and password', function () {
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

    it('As a user, I must be able to sign-in into my dashboard with my email and password', function () {
      cy.get('.app-login-form-email').type('test@test.com');
      cy.get('.app-login-form-password').type('123321');
      cy.wait(100);
      cy.get('.app-login-form-submit').click();
    });
    it('As a user, I must be able to request a forget password and get link by giving my email', () => {
      cy.get('.app-forget-password-link').click();
      cy.get('.app-forget-password-email').type('test@test.com').type('{enter}');
      cy.wait(100);
      cy.get('.success-message .success-text').should(($el) => {
        expect($el).to.contain('Request success');
      });
    })
  });
});
