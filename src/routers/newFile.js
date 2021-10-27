const express = require('express'),
    newFile = express.Router(),
    multer = require('multer'),
    path = require('path'),
    requestHandeler = require('../controllers/newFile').newFileHelper;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, 'FILE-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000 * 500
    }
});

newFile.use(express.json());

newFile.use(express.urlencoded({
    extended: true
}));

newFile.post('/upload', upload.single('file'), requestHandeler);

module.exports = newFile;