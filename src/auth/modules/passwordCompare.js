const bcryptjs = require("bcryptjs");

module.exports =
    /**
     * @author Monzer Omer
     * @description compare the password and check if it's correct
     * 
     * @param {string} password user password
     * @param {string} hash user hashed password
     * 
     * @returns promise the compare 
     */
    function (password, hash) {
        return new Promise((resolve, reject) => {
            bcryptjs.compare(password, hash, (err, success) => {
                if (err)
                    reject(err)

                resolve(success)
            })

        });

    }