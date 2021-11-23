const filesRouter = require("express").Router(),
    {
        newFile,
        deleteFile,
        downloadFile
    } = require("../controllers/files.controller"),
    multer = require('multer'),
    path = require('path'),
    storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './Public/uploads');
        },
        filename: (req, file, cb) => {
            cb(null, 'FILE-' + Date.now() + path.extname(file.originalname));
        }
    }),
    upload = multer({
        storage: storage,
        limits: {
            fileSize: 8000000
        }
    });

/*
 GET /download/:id 
 
 param "id" is the file id need to download

 response 500 with database error or unknown file
 or downloading the file if there's no errors
 */ 
filesRouter.get("/download/:id", downloadFile);
/*

DELETE /delete/:id

 param "id" is the file id need to delete
*/
filesRouter.get("/delete/:id", deleteFile);

/*
 POST /upload

 multipart upload a file
 {
     "name": "filename"
 }
 file filed is "file"
 */
filesRouter.post("/upload", upload.single('file'), newFile);


// filesRouter.get("/test", (req, res, next)=> {

// });

module.exports = filesRouter;