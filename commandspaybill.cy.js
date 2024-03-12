// <reference types="cypress" />
describe('Login with fixture data', function() {
    it('Should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')

        cy.fixture('user.json').then(user => {
            const username = user.username
            const password = user.password
    
        //login data
        cy.get('#user_login').type(username)
        cy.get('#user_password').type(password)
        cy.get('.btn').click()

        //pay bill
        cy.Pay()
    })
})
})
