/// <reference types="cypress" />

describe('Login and Logout Test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
});
// login with invalid data
    it('Should try to login with invalid data', () => {
        cy.get('#user_login').type('inavlid username')
        cy.get('#user_password').type('invalid password')
        cy.get('.btn').click()
    });

// login with valid data
    it('Should try to login with valid data', () => {

        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('.btn').click()
    });
// logout from valid data
    it('Should try to logout', () => {
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('.btn').click()
       
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('#logout_link').click()
    });
});