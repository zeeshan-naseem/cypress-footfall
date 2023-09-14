import { LoginPage } from "../Pages/loginpage.cy"
import { DeleteCamera } from "../Pages/deletecamerapage.cy"
import { TestData } from "../TestData/testdata.cy"

let loginpage = new LoginPage()
let del_cam = new DeleteCamera()
let test_data = new TestData

it('Delete Camera', function(){
    loginpage.navigate(test_data.URL)
    loginpage.enterUsername(test_data.USERNAME)
    loginpage.enterPassword(test_data.PASSWORD)
    loginpage.clickLogin()
    cy.wait(5000)
    del_cam.clickpagetwo()
    del_cam.deleteicon()
    del_cam.deletebutton()
})
