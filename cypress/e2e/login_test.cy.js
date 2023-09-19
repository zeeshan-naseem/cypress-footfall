import { LoginPage } from "../Pages/loginpage.cy"
import { TestData } from "../TestData/testdata.cy"

let loginPage = new LoginPage()
let test_data = new TestData

it('POM login test', function(){
  loginPage.navigate(test_data.URL)
  loginPage.enterUsername(test_data.USERNAME)
  loginPage.enterPassword(test_data.PASSWORD)
  loginPage.clickLogin()
})