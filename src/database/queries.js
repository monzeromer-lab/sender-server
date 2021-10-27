const models = require("../models/index");

module.exports = {

    /**
     * @author Monzer Omer
     * @description save new file in the database
     * @param {string} name file name
     * @param {string} path file name in the server
     * @param {number} size file size in byte
     * @returns {promise} `promise` return `Array` of the database result
     */
    createNewFile: (name, path, size) => {
        // use Promise with Sequelize
        return new Promise((resolve, reject) => {

            // save the file
            models.filesModel.create({
                name: name,
                path: path,
                size: size
            }).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            })
        });

    },

    /**
     * @author Monzer Omer
     * @description get all the files records
     * @returns {Promise} `promise` return `Array` of all files record
     */
    getAllFiles: () => {
        // use Promise with Sequelize
        return new Promise((resolve, reject) => {
            // get all the files
            models.filesModel.findAll().then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            })
        });
    },

    /**
     * @author Monzer Omer
     * @description get one file record with its `id`
     * @param {number} id file id
     * @returns {promise} return `Object` with the file data
     */
    getOneFile: (id) => {

        // use Promise with Sequelize
        return new Promise((resolve, reject) => {

            // get one file with primary key
            models.filesModel.findByPk(id).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    },

    /**
     * @author Monzer Omer
     * @description delete on file with it's `id`
     * @param {number} id file id
     * @returns promise the database result
     */
    deleteOneFile: (id) => {

        // use Promise with Sequelize
        return new Promise((resolve, reject) => {

            // delete one file where id is the same aurgument
            models.filesModel.destroy({
                where: {
                    id: id
                }
            }).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            })
        });
    }

    
}