//modules
const express = require('express'),
    //express app
    downloadEndPoint = express(),
    //database module
    database = require('../db/db');

/*
 GET /download/:id 
 
 param "id" is the file id need to download

 response 500 with database error or unknown file
 or downloading the file if there's no errors
 */        
downloadEndPoint.get('/download/:id', (request, response, next) => {

    //database query
    database.query(`SELECT * FROM sender WHERE id = ${database.escape(request.params.id)}`, (err, result) => {

        //handel error if there's & send response if there's no error
        err ? next(err) : response.status(200).download(result.path, result.name, (err) => {

            //the "next" method will will send the error to the error handeler in server.js 27,13
            next(err);
        });
    });

});

module.exports = downloadEndPoint;