/// <reference types = "cypress" />

export class AddCamera
{
    addcamerabutton_locator = 'Add camera'
    cameraname_locator = '[placeholder="Enter camera name"]'
    cameradescription_locator = '[placeholder="Enter camera description"]'
    location_locator = '[placeholder="Enter camera location"]'
    streamurl_locator = '[placeholder="Enter stream URL"]'
    createbutton_locator = '[data-focus-lock-disabled="false"] > .flex-col > :nth-child(2)'

    addcamerabutton()
    {
        cy.contains(this.addcamerabutton_locator, {timeout:10000}).click()
    }
    cameraname(cameraname)
    {
        cy.get(this.cameraname_locator).type(cameraname)
    }
    cameradescription(description)
    {
        cy.get(this.cameradescription_locator).type(description)
    }
    cameralocation(location)
    {
        cy.get(this.location_locator).type(location)
    }
    camerastreamurl(streamurl)
    {
        cy.get(this.streamurl_locator).type(streamurl)
    }
    createbutton()
    {
        cy.get(this.createbutton_locator).click()
    }
}