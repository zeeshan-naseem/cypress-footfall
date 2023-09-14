export class DeleteCamera
{
    clickpagetwo()
    {
        cy.get('.pagination > :nth-child(2)').click()
    }
    deleteicon()
    {
        cy.get(':nth-child(4) > :nth-child(5) > .flex > [aria-label="Delete"] > .w-5 > path').click()
    }
    deletebutton()
    {
        cy.get('[data-focus-lock-disabled="false"] > .flex-col > :nth-child(2)').click()
    }
}