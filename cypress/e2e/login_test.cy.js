import { LoginPage } from "../Pages/loginpage.cy"

let loginPage = new LoginPage()
it('pom login test', function(){
  loginPage.navigate()
  loginPage.enterUsername()
  loginPage.enterPassword()
  loginPage.clickLogin()
})