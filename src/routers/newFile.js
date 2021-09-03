const express = require('express'),
    newFile = express(),
    multer = require('multer'),
    path = require('path'),
    db = require('../db/db');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../uploaded');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, 'FILE-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

newFile.use(express.json());

newFile.use(express.urlencoded({
    extended: true
}));

newFile.post('/upload', upload.single('file'), (req, res, next) => {

    db.query(`INSERT INTO files (name , size , path) VALUES ( ${db.escape(req.body.name)} , ${db.escape(req.file.size)} , ${db.escape(req.file.path)})`, (err, result) => {
        err ? next(err) : res.status(200).send(`
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
        </html>
        `);
    });
});