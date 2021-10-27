const db = require('../database/database');
const queries = require("../database/queries")

module.exports.newFileHelper = (req, res, next) => {
    // get name field from body
    let {
        name
    } = req.body;

    // get file data to save it
    let {
        path,
        size,
        originalname
    } = req.file

    // save the file data
    queries.createNewFile(name, path, size).then((result) => {

        // response with 200 if successed
        res.status(200).render("uplouded", {
            fileName: originalname,
            filePath: path
        });

    }).catch((err) => {

        // response with 500 if database error
        next(err);
    });

};