/// <reference types="cypress"/>

describe("My First Test", () =>{
    it('clicking "type" show the right headings', () => {
        cy.visit('https://example.cypress.io')
        cy.get('h1').contains('Kitchen Sink')
        cy.contains('get').click()
        cy.pause()

    })
})