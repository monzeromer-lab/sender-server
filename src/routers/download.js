//modules
const downloadEndPoint = require('express').Router(),
    //helper
    requestHandeler = require('../controllers/download').downloadHelper;

/*
 GET /download/:id 
 
 param "id" is the file id need to download

 response 500 with database error or unknown file
 or downloading the file if there's no errors
 */        
downloadEndPoint.get('/download/:id', requestHandeler);

module.exports = downloadEndPoint;