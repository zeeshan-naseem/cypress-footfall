/// <reference types = "cypress" />

it('assertions', function(){
    cy.visit('https://11331.dev.technetgrp.com/login')
    cy.get(':nth-child(2) > .block').type('footfall5@yopmail.com')
    //below using custom timout of 6 sec, default is 4 sec incase specific element is not found
    cy.get('.input-container > .block',{timeout:6000}).type('Test.1234')
    cy.get('.align-bottom').click()

    //implicit assertions 
    //should
    //and --> not used yet this implicit assertion
    cy.get('.align-bottom')  
        .should('have.class', 'align-bottom') 
        cy.get('.align-bottom')  
        .should('be.visible')

    //explicit assertions
    //expect
    expect(true).to.be.true

    //assert
    assert.equal(5,5,'Numbers are equal')
})