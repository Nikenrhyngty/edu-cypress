/// <reference types="cypress" />

describe('Navbar test', function(){
    this.beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    //display online banking
    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu > div > strong').click()

        cy.get('#account_summary_link').click().should('be.visible')
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('.btn').click()

        cy.get('#account_activity_tab > a').click()
        cy.get('.board-header').should('contain.text', 'Show Transactions')
    });

    //display feedback
    it('Should display feedback content', () => {
        cy.get('#feedback > div').click()

        cy.get('#name').type('Taylor Swift')
        cy.get('#email').type('emailtaylorsukses@gmail.com')
        cy.get('#subject').type('Feedback')
        cy.get('#comment').type('Usefull application')
        cy.get('.btn-signin').click()
    });

    //back to homepage
    it('Should back to homepage', () => {
        cy.get('.brand').click()
    });
});