module.exports = {
    /**
     * 
     * @param {string} value 
     * @returns {boolean}
     */
    isString: function (value) {
        if (typeof (value) == "string") {
            return true
        } else {
            return false
        }
    },
    /**
     * 
     * @param {number} value 
     * @returns {boolean}
     */
    isNumber: function (value) {
        if (typeof (value) == "number") {
            return true
        } else {
            return false
        }
    },
    /**
     * 
     * @param {string} value 
     * @returns {boolean}
     */
    isNotString: function (value) {
        if (typeof (value) != "string") {
            return true
        } else {
            return false
        }
    }
    // ,
    // haveNumber: (value)=> {
    //     // test if the string have some numbers on it using RegExp
    //     return value
    // }
}