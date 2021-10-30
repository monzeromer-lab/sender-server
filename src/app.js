const express = require('express'),
    app = express();
// express.request.cookies("token", true)

/*
    enable bodyParser
*/
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/*
    template engein
*/
app.set('views', './src/views');
app.set("view engine", "ejs");

/* 
    add routers
*/
app.use('/', require('./routers/newFile'));
app.use('/', require('./routers/download'));
app.use('/', require('./routers/deleteFile'));
app.use('/', require('./routers/home'));
app.use('/', require("./routers/users"));

/* 
    serve static files
*/
app.use('/public', express.static('./Public'));

/* 
    redirect the user if the request url is empty
    to /home
*/
app.get('/', (req, res) => {
    res.status(200).render("home");
});

/* 
    other routers
*/
app.use('*', (req, res) => {
    res.status(404).json({
        error: true,
        message: 'Not Found!',
        data: []
    });
});

/* 
    error handeler
*/
app.use((err, req, res, next) => {
    res.status(500).json({
        error: true,
        message: err.message,
        data: []
    });
})

module.exports = app