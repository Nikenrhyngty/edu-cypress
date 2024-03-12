/// <reference types="cypress" />

describe('Working with inputs', () => {
it('Visit the website,', () => {
    cy.visit('http://zero.webappsecurity.com/login.html'),
    cy.url().should('include', 'login.html')
});

it('Should fill username', () => {
    cy.visit('http://zero.webappsecurity.com/login.html'),
    cy.url().should('include', 'login.html')
    cy.get('#user_login').click()
    cy.get('#user_password').click()
    cy.get('#user_remember_me')
    cy.get('.btn')
});
});