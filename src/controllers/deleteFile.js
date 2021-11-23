const fileSystem = require('fs'),
    queries = require("../database/queries");

module.exports.deleteFileHelper = (req, res, next) => {

    // get the id from url params
    let {
        id
    } = req.params

    // get one file with it's id
    queries.getOneFile(id).then((databaseResult) => {

        // if the result is null response with 404
        if (databaseResult == null) {
            res.status(404).render("notDeleted")

            // else delete the file
        } else {
            fileSystem.unlink(`./${result[0].path}`, (fileSystemError) => {

                // response with 500 if file system error
                if (fileSystemError) {
                    next(fileSystemError);

                    // else delete the file record
                } else {
                    queries.deleteOneFile(id).then((result) => {

                        // note: the result is the number of the deleted rows
                        // response with 200 if deleted
                        res.status(200).render("deleted");
                    }).catch((err) => {

                        //response with 500 if database error
                        next(err);
                    })
                }
            });
        }
    }).catch((databaseError) => {

        // response with 500 if databse error
        next(databaseError)
    });
};