describe('Profile test', function () {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('.app-login-form-email').type('test@test.com');
    cy.get('.app-login-form-password').type('123321');

    cy.wait(100);
    cy.get('.app-login-form-submit').click();
  });

  afterEach(() => {
    // cy.get('.ngx-menu-link-logout').click();
  });
  
  it('Must update the user profile details, such as name, lastname and phone', function () {
    cy.get('.app-profile-view').click();
    cy.wait(100);

    cy.get('.app-profile-firstname').clear().type('Ali');
    cy.get('.app-profile-lastname').clear().type('Torabi');
    cy.get('.app-profile-phone').clear().type('+601151100000');
    cy.get('.app-profile-update').click();
  });

  // it('We must able to see devices list and created device as well.', function () {
  //   cy.get('.ngx-menu-link-device').click();
  //   cy.wait(100);
  //   cy.get('.ngx-menu-link-device-list').click();

  //   cy.get('.app-devices-table').find('tr').should('have.length', 11);
  // });
});
