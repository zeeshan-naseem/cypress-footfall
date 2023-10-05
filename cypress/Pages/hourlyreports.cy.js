import moment from "moment/moment"

export class HourlyReports
{
    //locators
    reports_locator = '.z-50 > .py-4 > .mt-6 > :nth-child(2) > .justify-between > .inline-flex > .ml-4'
    hourlyreport_locator = '.p-2 > :nth-child(2) > .w-full'
    menuicon_locator = '.p-1'
    date_locator = '.react-datepicker__input-container > .lock'
    searchbutton_locator = '.ml-8'
    starttime_locator = ':nth-child(3) > .rc-time-picker > .rc-time-picker-input'
    endtime_locator = ':nth-child(4) > .rc-time-picker > .rc-time-picker-input'
    camerafield_locator = '.camera-box > .m-2'



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
    clickcamerafield()
    {
        cy.get(this.camerafield_locator).click()
        cy.get('#react-select-2-option-3').click()
    }
    clickdatefield()
    {
        const twoDaysAgo = moment().subtract(2, 'days').format('DD')
        // Open the date picker and select the calculated two day ago date
        cy.get(this.date_locator).click();
        cy.get(`.react-datepicker__day--0${twoDaysAgo}`).first().click()

    }
    clickstarttime()
    {
        cy.get(this.starttime_locator).click()
        cy.get('ul > :nth-child(17)').click()
    }
    clickendtime()
    {
        cy.get(this.endtime_locator).click()
        cy.get('ul > :nth-child(20)').click()
    }
    clicksearchbutton()
    {
        cy.get(this.searchbutton_locator).click()
    }
    
}