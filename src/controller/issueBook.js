const issueBookModel = require("../models/issueBook")

const issueBookRender = (req, res) => {
    res.render("issueBook")
};

const issueBook = async (req, res) => {
    try{
        const {name, Department, issuingDate, BookList} = req.body
        if (!(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(issuingDate))) {
            return res.status(400).render("correctDateError")
        }

        const bookDetails = new issueBookModel({
            name:name,
            Department : Department,
            issuingDate : issuingDate,
            BookList : BookList
        })
        const saveData = await bookDetails.save()
        console.log(saveData)
        res.status(201).render("afterIssuingBook")
    }
    catch(err){
        return res.status(500).send({msg:err.message})
    }
}
module.exports = { issueBookRender, issueBook }