//modules
const express = require('express'),
    //express app
    downloadEndPoint = express(),
    //helper
    requestHandeler = require('../controlers/download').downloadHelper;

/*
 GET /download/:id 
 
 param "id" is the file id need to download

 response 500 with database error or unknown file
 or downloading the file if there's no errors
 */        
downloadEndPoint.get('/download/:id', requestHandeler);

module.exports = downloadEndPoint;