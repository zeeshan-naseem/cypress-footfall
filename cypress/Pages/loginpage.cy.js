export class LoginPage{

    username_locator = ':nth-child(2) > .block'
    password_locator = '.input-container > .block'
    loginbutton_locator = '.align-bottom'

    navigate(url)
    {
        cy.visit(url)
    }
    enterUsername(name)
    {
        cy.get(this.username_locator).type(name)
    }
    enterPassword(password)
    {
        cy.get(this.password_locator).type(password)
    }
    clickLogin()
    {
        cy.get(this.loginbutton_locator).click()
    }
}