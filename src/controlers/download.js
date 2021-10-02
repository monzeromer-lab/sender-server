//database module
const database = require('../database/database');

module.exports.downloadHelper = (req, res, next) => {

    //database query
    database.query(`SELECT * FROM files WHERE id = ${database.escape(req.params.id)}`, (err, result) => {

        //stringify the result of the query because it unreadable for javascript
        result = JSON.stringify(result);

        //parse the json previse data to javascript object
        result = JSON.parse(result);

        //handel error if there's & send response if there's no error
        err ? next(err) : res.status(200).download('./' + result[0].path, result[0].name);
        
    });

}