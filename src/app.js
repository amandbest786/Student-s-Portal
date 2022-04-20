const express = require("express");
const app = express(); 
const path = require("path"); 
require("./db/conn");   
const hbs = require("hbs"); 
const signupController = require("./controller/signup")
const loginController = require("./controller/login") 
const WTUController = require("./controller/writeToUs") 
const signUpModel = require("./models/signupModel.js") 
const issueBookController = require("./controller/issueBook")
const fillFormController = require("./controller/fillForm")
const port = process.env.PORT || 8000

const static_path = path.join(__dirname, "../public")  
const template_path = path.join(__dirname, "./templates/views")
const partials_path = path.join(__dirname, "./templates/partials")
 
app.use(express.json())   
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)

app.get('/studentPortal', loginController.studentPortal)

app.get('/logInPage', loginController.renderLogInPage)

app.post('/logInPage', loginController.logInPage)

app.get('/signUpPage', signupController.signUpRender)

app.post('/signUpPage', signupController.userSignUp)

app.get('/afterSignUp', signupController.afterSignUp)

app.get('/writeToUsPage', WTUController.writeToUs)

app.post('/concernAdded', WTUController.writeToUsMain)

app.get('/issueBookPage', issueBookController.issueBookRender)

app.post('/issueBook', issueBookController.issueBook)

app.get('/formFillUpPage', fillFormController.fillFormRender) 

app.post('/fillOnlineForm', fillFormController.fillForm)

app.get('/getAllStudents', async (req, res) => {
    const data = await signUpModel.find()
    res.send(data)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});