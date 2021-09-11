const database = require('../modules/database'),
    fileSystem = require('fs');

module.exports.deleteFileHelper = (req, res, next) => {

    //get all the file data from the database and delete it
    database.query(`SELECT * FROM sender WHERE id = ${database.escape(req.params.id)}`, (databaseError, result) => {

        //if there's a database error send it to the error handeler otherwise continue
        databaseError ? next(databaseError) :

        //delete the file then delete the database recorde related to it
        fileSystem.unlink(result.path, (fileSystemError) => {

            //handel any error or delete the database recorde
            fileSystemError ? next(fileSystemError) : res.status(200).send(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>
                        Sender Server
                    </title>
                </head>
                <body>
                    <h1>
                        Welcome again to Sender Server
                    </h1>
                    File Deleted!
                </body>
            </html>
            `);
        });
    });
};