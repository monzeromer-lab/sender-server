const database = require('../modules/database'),

    //this module will create file table
    tableMaker = require('../modules/createFileList')

module.exports.homeHelper = (req, res, next) => {

    //get all the records
    database.query('select * from files', (err, result) => {
        const table = tableMaker(result);

        err ? next(err) : res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sender Server</title>
            </head>
            <body>

                <h1>Welcome to Sender Server</h1>

                <form action="/upload" method="post" enctype="multipart/form-data">
                    <input type="text" name="name" id="name">
                    <input type="file" name="file" />
                    <input type="submit" value="Send">
                </form>

                <table>
                    <caption>Current Files</caption>
                    <thead>
                        <td>file id</td>
                        <td>file name</td> 
                        <td>file size</td> 
                        <td>delete file</td> 
                        <td>download</td>
                    </thead>

                    <tbody>
                        ${table}
                    </tbody>

                </table>

            </body>
        </html>
        `);
    });

}