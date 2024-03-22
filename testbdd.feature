Feature: Zero Bank test run

    user can using this Zero Bank website
    user can login with valid data
    user can access every field in website

    Scenario: login with invalid data
        Given user access Zero Bank website
        When user input invalid username and password
        Then error notice be visible

    Scenario: login with valid data
        Given user access Zero Bank website again
        When user input valid username and password
        Then Zero Bank website can be access
    
    Scenario: Valid search
        Given user open Zero Bank website
        When user write keyword on search bar
        Then Zero Bank website show the result of Online Banking
          