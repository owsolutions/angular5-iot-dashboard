describe('E2E tests', function () {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('.app-login-form-email').type('test@test.com');
    cy.get('.app-login-form-password').type('123321');

    cy.wait(100);
    cy.get('.app-login-form-submit').click();
  });

  afterEach(() => {
    cy.get('.ngx-menu-link-logout').click();
  });
  
  it('It must be able to create a new device by feeling the form', function () {
    cy.get('.ngx-menu-link-device').click();
    cy.wait(100);
    cy.get('.ngx-menu-link-device-create').click();

    cy.get('.app-device-general-name').type('Device 1');
    cy.get('.app-device-general-type').select('0');
    cy.get('.app-device-general-datasource').type('device-1');
    cy.get('.app-device-general-model').type('knx-v200');
    cy.get('.app-device-general-description').type('This is a test device');
    cy.get('.app-device-single-create').click();
    cy.wait(100);
  });

  it('We must able to see devices list and created device as well.', function () {
    cy.get('.ngx-menu-link-device').click();
    cy.wait(100);
    cy.get('.ngx-menu-link-device-list').click();

    // cy.get('.app-devices-table').find('tr').should('have.length', 10);
  });
});
