//database module
const queries = require('../database/queries');

module.exports.downloadHelper = (req, res, next) => {

    // get the file id from url params
    let {
        id
    } = req.params

    // get file recorde
    queries.getOneFile(id).then((result) => {

        //response with 200 and send the file
        res.status(200).download('./' + result.path, result.name);
    }).catch((err) => {

        // response with 500 if database error
        next(err);
    })

}