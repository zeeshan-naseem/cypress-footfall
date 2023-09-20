export class DeleteCamera
{
    pagenumbertwo_locator = '.pagination > :nth-child(2)'
    deleteicon_locator = ':nth-child(4) > :nth-child(5) > .flex > [aria-label="Delete"] > .w-5 > path'
    deletebutton_locator = '[data-focus-lock-disabled="false"] > .flex-col > :nth-child(2)'

    clickpagetwo()
    {
        cy.get(this.pagenumbertwo_locator).click()
    }
   
    deleteicon()
    {
        cy.get(this.deleteicon_locator).click()      
    }
    deletebutton()
    {
        cy.get(this.deletebutton_locator).click()
    }
    
}