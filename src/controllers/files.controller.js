const queries = require("../database/queries"),
    fileSystem = require('fs');

module.exports = {
    /*
        save new file
    */
    newFile: (req, res, next) => {
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
    },


    /*
     delete file
    */
    deleteFile: (req, res, next)=> {
        
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
    
    },

    /*
        download file
    */
   downloadFile: (req, res, next)=> {
       
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
    });

   }
}