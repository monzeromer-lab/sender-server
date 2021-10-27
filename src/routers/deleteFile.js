const deleteFileEndPoint = require('express').Router(),
    requestHandeler = require('../controllers/deleteFile').deleteFileHelper;
/*

DELETE /delete/:id

 param "id" is the file id need to delete
*/
deleteFileEndPoint.get('/delete/:id', requestHandeler);

module.exports = deleteFileEndPoint;