Feature: Login to Zero Bank Website

        user should can login with valid data
    
    Scenario: Login with valid data
        Given user open login page
        When user submit login
        Then user should see homepage
    
    Scenario: Add new payee
        Given user open Zero Bank website
        When user write keyword on search bar
        Then Zero Bank website show the result of Online Banking