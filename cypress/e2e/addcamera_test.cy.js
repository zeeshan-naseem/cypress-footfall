import { LoginPage } from "../Pages/loginpage.cy"
import { TestData } from "../TestData/testdata.cy"
import { AddCamera } from "../Pages/addcamerapage.cy"

let loginPage = new LoginPage()
let test_data = new TestData()
let add_cam = new AddCamera()


// Add Camera
it('Add Camera', function(){
  loginPage.navigate(test_data.url)
  loginPage.enterUsername(test_data.username)
  loginPage.enterPassword(test_data.password)
  loginPage.clickLogin()
  cy.wait(6000)
  add_cam.addcamerabutton()
  add_cam.cameraname(test_data.CAMERA_NAME)
  add_cam.cameradescription(test_data.CAMERA_DESCRIPTION)
  add_cam.cameralocation(test_data.CAMERA_LOCATION)
  add_cam.camerastreamurl(test_data.STREAM_URL)
  add_cam.createbutton()
})