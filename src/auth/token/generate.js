const JWT = require("jsonwebtoken");

module.exports =
/**
 * @author Monzer Omer
 * @description generate now token
 * 
 * @param {object} data 
 * @param {string} key 
 * 
 * @returns promise the token
 */
function (data, key) {
    return new Promise((resolve, reject) => {
        JWT.sign(data, key, {
            expiresIn: "7d",
        }, (err, token) => {
            if (err)
            reject(err);

            resolve(token);
        })
    });

}