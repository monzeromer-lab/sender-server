const express = require('express');
const app = express();

app.use('/static',express.static('./uploaded'));

app.get('/' , (req , res)=>{
    res.status(200).sendFile( __dirname + '/index.html');
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

app.listen(2022);