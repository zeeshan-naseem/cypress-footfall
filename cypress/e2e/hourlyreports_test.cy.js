import { TestData } from "../TestData/testdata.cy";
import { LoginPage } from "../Pages/loginpage.cy";
import { HourlyReports } from "../Pages/hourlyreports.cy";

let loginPage = new LoginPage()
let test_data = new TestData()
let hrreport = new HourlyReports()

it('Hourly Report', function(){
    loginPage.navigate(test_data.URL)
    loginPage.enterUsername(test_data.USERNAME)
    loginPage.enterPassword(test_data.PASSWORD)
    loginPage.clickLogin()
    cy.wait(5000)
    hrreport.clickmenuicon()
    cy.wait(1000)
    hrreport.clickReport()
    hrreport.clickhourlyreport()
    hrreport.clickdatefield()
    hrreport.clicksearchbutton()
})