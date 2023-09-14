export class LoginPage{
    navigate()
    {
        cy.visit('https://11331.dev.technetgrp.com/login')
    }

    enterUsername()
    {
        cy.get(':nth-child(2) > .block').type('footfall5@yopmail.com')
    }
    enterPassword()
    {
        cy.get('.input-container > .block').type('Test.1234')
    }
    clickLogin()
    {
        cy.get('.align-bottom').click()
    }
}