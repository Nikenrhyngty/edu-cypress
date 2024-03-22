const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

// first scenario
    Given('user access Zero Bank website', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
    });

    When('user input invalid username and password', () => {
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('.btn').click()
    });

    Then('error notice be visible', () => {
        cy.get('.alert').should('exist')
    });

// second scenario
    Given('user access Zero Bank website again', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
    });

    When('user input valid username and password', () => {
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('.btn').click()
    });

    Then('Zero Bank website can be access', () => {
        cy.get('#account_summary_tab > a').should('exist')
    });

// third scenario
    Given("user open Zero Bank website", () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    When("user write keyword on search bar", () => {
        cy.get('#searchTerm').type('Online Banking{enter}')
    });

    Then("Zero Bank website show the result of Online Banking", () => {
        cy.get('h2').should('be.visible')
        cy.get('li > a').click()
        cy.get('h1').should('be.visible')
    });
