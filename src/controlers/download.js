//database module
const database = require('../modules/database');

module.exports.downloadHelper = (req, res, next) => {

    //database query
    database.query(`SELECT * FROM sender WHERE id = ${database.escape(req.params.id)}`, (err, result) => {

        //handel error if there's & send response if there's no error
        err ? next(err) : res.status(200).download(result.path, result.name, (err) => {

            //the "next" method will will send the error to the error handeler in server.js 27,13
            next(err);
        });
    });

}