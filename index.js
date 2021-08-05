const express = require('express');
const app = express();
const PORT = 2022;

/* add routers */
app.use('/' , require('./src/routers/newFile'));
app.use('/' , require('./src/routers/download'));
app.use('/' , require('./src/routers/deleteFile'));

/* serve static files */
app.use('/static',express.static('./uploaded'));

/* main page renderer */
app.get('/' , (req , res)=>{
    res.status(200).sendFile( __dirname + '/index.html');
});

/* other routers */
app.get('*' , (req , res)=>{
    res.status(404).json({Error: 'Not Found!'});
});

app.post('*', (req , res, next)=>{
    res.status(404).json({Error: 'Not Found!'});
});

app.put('*', (req , res, next)=>{
    res.status(404).json({Error: 'Not Found!'});
});

app.delete('*', (req , res, next)=>{
    res.status(404).json({Error: 'Not Found!'});
});

/* error handeler */
app.use((err, req, res,next) => {
    res.status(500).json({error: true, message: err.message, data: []});
})

/* port listining */
app.listen(PORT);