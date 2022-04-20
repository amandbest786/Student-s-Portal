const fillFormModel = require("../models/fillFormModel");

const fillFormRender = (req, res) => {
    res.render("fillOnlineForm")
};

const fillForm = async (req, res) => {
    try{
        const studentDetails = new fillFormModel({
                Name : req.body.Name,
                fName : req.body.fName,
                mName : req.body.mName,
                Gender : req.body.Gender,
                Department:req.body.Department,
                Semester:req.body.Semester
            })
        const saveData = await studentDetails.save()
        console.log(saveData)
        res.status(201).render("afterFormFillUp")
    }
    catch(err){return res.status(500).send({msg:err.message})}
}

module.exports = { fillFormRender, fillForm }