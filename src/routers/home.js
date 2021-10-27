const homeRouter = require('express').Router(),
    requestHandeler = require('../controllers/home').homeHelper;

/*
    GET /home

    will list all the files in a table and allow the user to upload new file
*/
homeRouter.get('/home', requestHandeler);

module.exports = homeRouter;