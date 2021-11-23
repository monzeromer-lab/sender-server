// const test = require("./modules")

// module.exports = {
//     register: (req, res, next) => {
//         let errors = [];
//         let {
//             firstname = null,
//                 lastname = null,
//                 password = null,
//                 username = null,
//                 birthdate = null
//         } = req.body;

//         // validate firstname
//         if (!firstname) {
//             errors.push({
//                 failed: "firstname",
//                 message: "firstname is requiered!"
//             });
//         } else if (test.isNotString(firstname)) {
//             errors.push({
//                 failed: "firstname",
//                 message: "firstname should be string!"
//             });
//         }

//         // validate lastname
//         if (!lastname) {
//             errors.push({
//                 failed: "lastname",
//                 message: "lastname is requiered!"
//             });
//         } else if (test.isNotString(lastname)) {
//             errors.push({
//                 failed: "lastname",
//                 message: "lastname should be string!"
//             });
//         }

//         // validate password
//         if (!password) {
//             errors.push({
//                 failed: "password",
//                 message: "password is requiered!"
//             });
//         } else if (test.isNotString(password)) {
//             errors.push({
//                 failed: "password",
//                 message: "password should be string!"
//             });
//         } else if (password && password.length < 8) {
//             errors.push({
//                 failed: "password",
//                 message: "password shouldn't be lessthan 8 letters"
//             });
//         }

//         //validate username
//         if (!username) {
//             errors.push({
//                 failed: "username",
//                 message: "username is requiered!"
//             });
//         } else if (test.isNotString(username)) {
//             errors.push({
//                 failed: "username",
//                 message: "username should be string!"
//             });
//         }

//         // validate birthdate
//         if (!birthdate) {
//             errors.push({
//                 failed: "birthdate",
//                 message: "birthdate is requiered!"
//             });
//         } else if (test.isNotString(birthdate)) {
//             errors.push({
//                 failed: "birthdate",
//                 message: "birthdate should be string!"
//             });
//         }

//         // if there's errors response with 403
//         if (errors.length >= 1) {
//             res.status(403).render("register", {
//                 data: errors
//             });
//         } else {
//             next();
//         }
//     }

// }