describe('Devices (CloudDevices)', function () {
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
  
  it('As a user, I must be able to create a new device, and connect to datasource', function () {
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

  it('As a user, I must be able to view list of all devices that I have in my dashboard', function () {
    cy.get('.ngx-menu-link-device').click();
    cy.wait(100);
    cy.get('.ngx-menu-link-device-list').click();
  });
});
