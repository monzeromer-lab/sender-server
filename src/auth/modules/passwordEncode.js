const bcryptjs = require("bcryptjs");

module.exports = 
/**
 * @author Monzer Omer
 * @description hash the password
 * 
 * @param {string} password user password
 * 
 * @returns promise the password
 */
function (password) {
    return new Promise((resolve, reject) => {
        bcryptjs.genSalt(10, (err, salt) => {
            if (err)
                reject(err);

            bcryptjs.hash(password, salt, (err, hash) => {
                if (err)
                    reject(err);

                resolve(hash)
            })
        })
    });

}