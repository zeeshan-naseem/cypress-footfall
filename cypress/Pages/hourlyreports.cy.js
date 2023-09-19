import moment from "moment/moment"

export class HourlyReports
{
    //locators
    reports_locator = '.z-50 > .py-4 > .mt-6 > :nth-child(2) > .justify-between > .inline-flex > .ml-4'
    hourlyreport_locator = '.p-2 > :nth-child(2) > .w-full'
    menuicon_locator = '.p-1'
    date_locator = '.react-datepicker__input-container > .lock'
    searchbutton_locator = '.ml-8'



    clickmenuicon()
    {
        cy.get(this.menuicon_locator).click()
    }
    clickReport()
    {
        cy.get(this.reports_locator).click()
    }
    clickhourlyreport()
    {
        cy.get(this.hourlyreport_locator).click()
    }
    clickdatefield()
    {
        const twoDaysAgo = moment().subtract(2, 'days').format('DD');
        // Open the date picker and select the calculated date
        cy.get(this.date_locator).click();
        cy.wait(2000)
        cy.get( `.react-datepicker__day--0${twoDaysAgo}`).click()
    }
    clicksearchbutton()
    {
        cy.get(this.searchbutton_locator).click()
    }
}