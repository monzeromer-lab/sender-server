const queries = require("../database/queries");

module.exports.homeHelper = (req, res, next) => {

    //get all the records
    queries.getAllFiles().then((result)=> {
        res.status(200).render("main", {
            data: result
        });
    }).catch((err)=> {
        next(err)
    });

}
