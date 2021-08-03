const express = require('express');
const newFile = express();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../uploaded');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, 'FILE-' + Date.now() + path.extname(file.originalname));
    }
});
   
const upload = multer({ storage: storage });

newFile.post('/upload', upload.single('image') ,  (req , res ,next)=>{
    res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sender Server</title>
    </head>
    <body>
        
    <h1>Welcome again to Sender Server</h1>
    
    Your File ${req.file.originalname} Is Now Available at ${req.file.path}
    
    </body>
    </html>`);
});