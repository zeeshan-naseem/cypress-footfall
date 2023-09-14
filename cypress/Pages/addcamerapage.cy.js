/// <reference types = "cypress" />

export class AddCamera
{
    addcamerabutton()
    {
        cy.contains('Add camera', {timeout:6000}).click()
    }
    cameraname(cameraname)
    {
        cy.get('[placeholder="Enter camera name"]').type(cameraname)
    }
    cameradescription(description)
    {
        cy.get('[placeholder="Enter camera description"]').type(description)
    }
    cameralocation(location)
    {
        cy.get('[placeholder="Enter camera location"]').type(location)
    }
    camerastreamurl(streamurl)
    {
        cy.get('[placeholder="Enter stream URL"]').type(streamurl)
    }
    createbutton()
    {
        cy.get('[data-focus-lock-disabled="false"] > .flex-col > :nth-child(2)').click()
    }
}