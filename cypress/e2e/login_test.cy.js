import { LoginPage } from "../Pages/loginpage.cy"
import { TestData } from "../TestData/testdata.cy"

let loginPage = new LoginPage()
let test_data = new TestData
it('POM login test', function(){
  loginPage.navigate(test_data.url)
  loginPage.enterUsername(test_data.username)
  loginPage.enterPassword(test_data.password)
  loginPage.clickLogin()
})