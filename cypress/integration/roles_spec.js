describe('Roles & Access', function () {
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
  
  context('As a user, I must be able to see the list of roles', function () {
    beforeEach (() => {
      cy.get('.ngx-menu-link-users-access').click();
      cy.wait(100);
      cy.get('.ngx-menu-link-roles-list').click();
    });
    it('Must be able to see all roles', () => {
      cy.get('.app-roles-table').find('tbody tr').should('have.length', 3);  
    });
    it('Must able to delete role from roles list', () => {
      cy.get('.role-delete-button-1').click();
      cy.get('.app-roles-table').find('tbody tr').should('have.length', 2);
    });
    it('Must to able to move to the edit form and be able to update the role', () => {
      cy.get('.role-edit-button-2').click();
      cy.get('.app-page-title').should(($el) => {
        expect($el).to.contain('Edit role \'Master\'');
      });
      cy.get('.app-role-name').type('2');
      cy.get('.app-role-single-edit').click();
    });
    it('Must able to delete role from single role page', () => {
      cy.get('.role-edit-button-2').click();
      cy.get('.app-role-single-delete').click();
      cy.get('.app-roles-table').find('tbody tr').should('have.length', 2);
    });
    it('Cancel button on role single must return to roles list', () => {
      cy.get('.role-edit-button-2').click();
      cy.get('.app-role-single-cancel').click();
      cy.get('.app-roles-table').find('tbody tr').should('have.length', 3);
    });
  });
});
