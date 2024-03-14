/// <reference types="cypress" />

describe('Searchbox Text', function() {
    this.beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')    
    })
    
    it('Should type into searcbox and submit', () => {
        // first searchbox - Free Access
        cy.get('#searchTerm').type('Free Access{enter}')
        cy.get('li > a').click()
        // second searchbox - Online Statement
        cy.get('#searchTerm').type('Online Statement{enter}')
        cy.get('#onlineBankingMenu > div > strong')
        cy.get('li > a').click()
    });
})