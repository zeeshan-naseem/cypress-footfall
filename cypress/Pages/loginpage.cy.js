export class LoginPage{
    navigate(url)
    {
        cy.visit(url)
    }

    enterUsername(name)
    {
        cy.get(':nth-child(2) > .block').type(name)
    }
    enterPassword(password)
    {
        cy.get('.input-container > .block').type(password)
    }
    clickLogin()
    {
        cy.get('.align-bottom').click()
    }
}