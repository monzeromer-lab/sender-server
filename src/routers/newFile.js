const express = require('express'),
    newFile = express(),
    multer = require('multer'),
    path = require('path'),
    requestHandeler = require('../controlers/newFile').newFileHelper;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploaded');
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

newFile.post('/upload', upload.single('file'), requestHandeler);

module.exports = newFile;