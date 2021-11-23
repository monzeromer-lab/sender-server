const server = require('./src/app'),
    rateLimit = require('express-rate-limit'),
    PORT = 2022;

/*
    configure rate limit
*/
const rateLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 20
});

/*
    enable rate limit
*/
server.use(rateLimiter);

/* 
    port listining
*/
server.listen(PORT);