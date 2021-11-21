// const test = () => {
//     let value = 11;
//     return new Promise((resolve, reject) => {
//         if (value == 11) {
//             resolve({
//                 error: false,
//                 data: "value is equal 11"
//             });
//         } else {
//             reject({
//                 state: true,
//                 data: "value doesn't equal 11"
//             });
//         }
//     })
// }

// test().then((result) => {
//     console.log(`error = ${result.error} data = ${result.data}`);
// }).catch((error) => {
//     console.log(`error = ${error.state} data = ${error.data}`);
// })

// const db = require("./src/database/queries");

// db.createNewFile("test", "/public/uploads/file-394527893572895.pdf", 234523).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// db.getAllFiles().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// db.getOneFile(21).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// db.deleteOneFile(20).then((result) => {
//     if (result) {
//         console.log(result);
//     } else {
//         console.log("no file");
//     }
// }).catch((err) => {
//     console.log(err);
// })

// db.addUser("Monzer", "Omer", "2000-10-26", "test", "password123").then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// db.getAllUsers().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// const encode = require("./src/auth/modules/passwordEncode");
// const genToken = require("./src/auth/token/generate");
// const {token_secret} = require("./config/configiration");
// const compare = require("./src/auth/modules/passwordCompare");

// encode('password123').then((hash) => {


//     db.addUser("Monzer", "Omer", "2000-10-26", "monzersmilepic", hash).then((result) => {
//         console.log(hash);
//     }).catch((err) => {
//         console.log(err);
//     });

//     compare('password123', hash).then((state) => {
//         if (state)
//             console.log("success");
//         else
//             console.log("err");

//     }).catch((err) => {
//         console.log(err);
//     });

// }).catch((err) => {
//     console.log(err);
// });

// let req = {
//     body: {
//         firstname: "Monzer",
//         lastname: "Omer",
//         password: "password123",
//         username: "testtest123",
//         birthdate: "2000-10-26"
//     }
// }
    


// let {
//     firstname,
//     lastname,
//     password = null,
//     username = null,
//     birthdate = null
// } = req.body;

// console.log(password , firstname , username);

// function anything(hello, callback){
//     console.log(hello);

//     callback("my name is ", "monzer")
// }
// anything("hello" ,(text, name) => {
//     console.log(text, name);
// })

// const test = require("./src/validitation/modules")

// let errors = []

// // validate firstname
// if (!firstname) {
//     errors.push({
//         failed: "firstname",
//         message: "firstname is requiered!"
//     });
// } else if (test.isNotString(firstname)) {
//     errors.push({
//         failed: "firstname",
//         message: "firstname should be string!"
//     });
// }

// // validate lastname
// if (!lastname) {
//     errors.push({
//         failed: "lastname",
//         message: "lastname is requiered!"
//     });
// } else if (test.isNotString(lastname)) {
//     errors.push({
//         failed: "lastname",
//         message: "lastname should be string!"
//     });
// }

// // validate password
// if (!password) {
//     errors.push({
//         failed: "password",
//         message: "password is requiered!"
//     });
// } else if (test.isNotString(password)) {
//     errors.push({
//         failed: "password",
//         message: "password should be string!"
//     });
// } else if (password && password.length < 8) {
//     errors.push({
//         failed: "password",
//         message: "password shouldn't be lessthan 8 letters"
//     });
// }

// //validate username
// if (!username) {
//     errors.push({
//         failed: "username",
//         message: "username is requiered!"
//     });
// } else if (test.isNotString(username)) {
//     errors.push({
//         failed: "username",
//         message: "username should be string!"
//     });
// }

// // validate birthdate
// if (!birthdate) {
//     errors.push({
//         failed: "birthdate",
//         message: "birthdate is requiered!"
//     });
// } else if (test.isNotString(birthdate)) {
//     errors.push({
//         failed: "birthdate",
//         message: "birthdate should be string!"
//     });
// }

// console.log(errors);
