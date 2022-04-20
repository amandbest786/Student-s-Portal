const writeToUsModel = require("../models/writeToUsModel");


const writeToUs = (req, res) => {
    res.render("writeToUs")
};

const writeToUsMain = async (req, res) => {
    try{
        const {concern, name} = req.body
        const writeDetails = new writeToUsModel({concern : concern, name:name})
        const saveData = await writeDetails.save()
        console.log(saveData)
        res.status(201).render("afterWriteToUs")
    }
    catch(err){return res.status(500).send({msg:err.message})}
}

module.exports ={
    writeToUs,
    writeToUsMain
}