/// <reference types="cypress" />
describe('Login with fixture data', function() {
it('Should try to login', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    
    cy.fixture('usersauce.json').then(user => {
        const username = user.username
        const password = user.password

    //login data
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()

    //add to cart
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click()

    //checkout
   cy.visit('https://www.saucedemo.com/v1/cart.html')
   cy.get('.btn_action').click()

   cy.fixture('usersauce.json').then(user => {
    const FirstName = user.FirstName
    const LastName = user.LastName
    const ZIP = user.ZIP

    cy.get('[data-test="firstName"]').type(FirstName)
    cy.get('[data-test="lastName"]').type(LastName)
    cy.get('[data-test="postalCode"]').type(ZIP)
    cy.get('.btn_primary').click()

    //finish
    cy.get('.btn_action').click()

    })
})
})
})
