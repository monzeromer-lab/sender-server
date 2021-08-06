const express = require('express');
const deleteFile = express();
const db = require('../db/db');
const fs = require('fs');

deleteFile.get('/delete/:id' ,  (req , res ,next)=>{
    db.query(`SELECT * FROM sender WHERE id = ${db.escape(req.params.id)}` , (err , result) => {
            db.query(`SELECT * FROM sender WHERE id = ${db.escape(req.params.id)}` , (err , result) => {
                fs.unlink(result.path, (err) => {
                    err ? next(err) : res.status(200).send(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Sender Server</title>
                    </head>
                    <body>
                
                    <h1>Welcome again to Sender Server</h1>
                    File Deleted!
                    </body>
                    </html>`)
        });
             });
            
    });
});

module.exports = deleteFile;