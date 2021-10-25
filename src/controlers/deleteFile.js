const database = require('../database/database'),
    fileSystem = require('fs');

module.exports.deleteFileHelper = (req, res, next) => {

    //get all the file data from the database and delete it
    database.query(`SELECT * FROM files WHERE id = ${database.escape(req.params.id)}`, (databaseError, result) => {

        //stringify the result of the query because it unreadable for javascript
        result = JSON.stringify(result);

        //parse the json previse data to javascript object
        result = JSON.parse(result);

        //if there's a database error send it to the error handeler otherwise continue
        databaseError ? next(databaseError) :

            //if the result is empty response with this file isn't available
            result.length < 1 ? res.status(404).send(`
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
                    This file isn't available
                </body>
            </html>
            `) :
            // res.status(404).render("notDeleted");

            //delete the file then delete the database recorde related to it
            fileSystem.unlink(`./${result[0].path}`, (fileSystemError) => {
                
                //handel any error or delete the database recorde
                fileSystemError ? next(fileSystemError) :

                    //delete the recorde
                    database.query(`DELETE FROM files WHERE id = ${database.escape(req.params.id)}`, (databaseDeleteQueryError, _result) => {
                        
                        //send the response
                        databaseDeleteQueryError ? next(databaseDeleteQueryError) : res.status(200).send(`
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
                        // res.status(200).render("deleted");
                    });
            });
    });
};