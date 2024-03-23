import LoginPage from "./login.page";
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

// first scenario
Given('user open login page', () => {
    LoginPage.visit();
});

When('user submit login', () => {
    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.signIn();
});

Then('user should see homepage', () => {
    cy.get('#account_summary_tab > a').should('be.visible')
});

// second scenario
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