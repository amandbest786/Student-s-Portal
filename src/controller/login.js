const signUpModel = require("../models/signupModel");

const studentPortal = (req, res) => {
    res.render("frontPage")
};

const renderLogInPage = (req, res) => {
    res.render("logInPage")
}

const logInPage = async (req, res) => {
    try{
        Email = req.body.email
        Password = req.body.password
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)){
            return res.status(400).render("invalidEmail")
        }
        let authorCred = await signUpModel.findOne({Email, Password, isDeleted: false});  //finding the email/password in the signUpModel.
        if (authorCred){
          res.render("interface")
        }
        else{return res.status(401).render("invalidCred")}
    }
    catch(err){return res.status(500).send({msg:err.message})}
}

module.exports = {
    logInPage,
    renderLogInPage,
    studentPortal
}