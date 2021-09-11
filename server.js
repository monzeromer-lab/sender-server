const express = require('express'),
    server = express(),
    rateLimit = require("express-rate-limit"),
    PORT = 2022;

/* 
    add routers
*/
server.use('/', require('./src/routers/newFile'));
server.use('/', require('./src/routers/download'));
server.use('/', require('./src/routers/deleteFile'));
server.use('/' , require('./src/routers/home'));

/*
    disable x-powerd-by
*/
server.disable("x-powered-by");

/*
configure rate limit
*/
const rateLimiter = rateLimit({
    windowMs: 25 * 60 * 1000,
    max: 20
});

/*
enable rate limit
*/
server.use(rateLimiter);

/* 
    serve static files
*/
server.use('/static', express.static('./uploaded'));

/* 
    redirect the user if the request url is empty
    to /home
*/
server.get('/', (req, res) => {
    res.redirect('/home');
});

/* 
    other routers
*/
server.use('*', (req, res) => {
    res.status(404).json({
        Error: 'Not Found!'
    });
});

/* 
    error handeler
*/
server.use((err, req, res, next) => {
    res.status(500).json({
        error: true,
        message: err.message,
        data: []
    });
})

/* 
    port listining
*/
server.listen(PORT);