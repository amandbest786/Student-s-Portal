const signUpModel = require("../models/signupModel");


const signUpRender = (req, res) => {
    res.render("signUpPage")
};

const userSignUp = async (req, res) => {
    try{
        const password = req.body.Password
        const confirmPassword = req.body.ConfirmPassword
        const email = req.body.Email
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            return res.status(400).render("invalidEmail")
        } 
        const duplicateEmail = await signUpModel.findOne({Email : email})
        if(duplicateEmail){
            return res.status(400).render("duplicateEmail")
        }
        const Password = req.body.Password
        if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(Password))){
            return res.status(400).render("invalidPassword")
        }
        if(password == confirmPassword){
            const studentDetails = new signUpModel({
                Name : req.body.Name,
                Email : email,
                Department:req.body.Department,
                Semester:req.body.Semester,
                Password : Password,
                ConfirmPassword : confirmPassword
            })
        const saveData = await studentDetails.save()
        console.log(saveData)
        res.status(201).render("afterSignUp")
        }
        else{res.status(400).render("passwordNotMatch")}
    }
    catch(err){return res.status(500).send({msg:err.message})}
}


const afterSignUp = (req, res) => {
    res.render("afterSignUp")
}

module.exports = {
    signUpRender,
    userSignUp,
    afterSignUp
}