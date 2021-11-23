const JWT = require("jsonwebtoken");

module.exports =
    /**
     * @author Monzer Omer
     * @description verify the token
     * 
     * @param {object} token
     * @param {string} key 
     * 
     * @returns promise verify token
     */
    function (token, key) {
        return new Promise((resolve, reject) => {
            JWT.verify(token, key, {
                ignoreExpiration: false
            }, (err, decoded) => {
                if (err)
                    reject(err)

                resolve(decoded)
            })
        });

    }