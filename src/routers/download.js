const express = require('express');
const downloadFile = express();
const db = require('../db/db');

downloadFile.get('/download/:id' ,  (req , res ,next)=>{
    db.query(`SELECT * FROM sender WHERE id = ${db.escape(req.params.id)}` , (err , result) => {
        err ? next(err) : res.status(200).download(result.path , result.name , (err) =>{
            next(err);
        });
    });
});

module.exports = downloadFile;