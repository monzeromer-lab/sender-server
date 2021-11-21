const models = require("../models/index");

module.exports = {

    /**
     * @author Monzer Omer
     * @description save new file in the database
     * 
     * @param {string} name file name
     * @param {string} path file name in the server
     * @param {number} size file size in byte
     * 
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
            });
        });

    },

    /**
     * @author Monzer Omer
     * @description get all the files records
     * 
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
            });
        });
    },

    /**
     * @author Monzer Omer
     * @description get one file record with its `id`
     * 
     * @param {number} id file id
     * 
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
     * 
     * @param {number} id file id
     * 
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
            });
        });
    },

    /**
     * @author Monzer Omer
     * @description create new user
     * 
     * @param {string} firstname user first name
     * @param {string} lastname user last name
     * @param {number} birthdate user birth date
     * @param {string} username username to login with
     * @param {string} password user password
     * 
     * @returns {promise} promise the database result if success or not
     */
    addUser: (firstname, lastname, birthdate, username, password) => {

        // use Promise with Sequelize
        return new Promise((resolve, reject) => {

            // create new user record
            models.usersModel.create({
                firstname: firstname,
                lastname: lastname,
                birthdate: birthdate,
                username: username,
                password: password
            }).then((result) => {
                resolve(result);

            }).catch((err) => {
                reject(err);
            });
        });
    },

    /**
     * @author Monzer Omer
     * @description get all the users table records
     * 
     * @returns {promise} `Array` contain the object with users data
     */
    getAllUsers: () => {

        // use promise with sequelize
        return new Promise((resolve, reject) => {

            // get all the users records
            models.usersModel.findAll().then((result) => {
                resolve(result);

            }).catch((err) => {
                reject(err);
            });
        });
    },

    /**
     * @author Monzer Omer
     * @description modify or add those values to user profile
     * 
     * @param {string} id user id
     * @param {string} cover user cover photo path
     * @param {string} profile user profile image path
     * @param {string} bio user bio
     * @param {number} phonenumber user phone number
     * @param {string} email user email
     * 
     * @returns {promise} promise the database result
     */
    updateUser: (id, cover, profile, bio, phonenumber, email) => {

        // use promise with sequelize
        return new Promise((resolve, reject) => {

            // update one user with it's id
            models.usersModel.update({
                bio: bio,
                cover: cover,
                profile: profile,
                phonenumber: phonenumber,
                email: email
            }, {
                where: {
                    id: id
                }
            }).then((result) => {
                resolve(result);

            }).catch((err) => {
                reject(err);
            });

        });
    },

    /**
     * @author Monzer Omer
     * @description get one user record using he's username
     * 
     * @param {string} username username
     * 
     * @returns {promise} promise the username record
     */
    getOneUser: (username) => {
        return new Promise((resolve, reject) => {
            models.usersModel.findOne({
                where: {
                    username: username
                }
            }).then((result) => {
                resolve(result);

            }).catch((err) => {
                reject(err);
            });
        });
    },

    /**
     * @author Monzer Omer
     * @description Follow a user
     * @param {string} userId the user to follow id
     * @param {string} followerId the user who cliked the follow button id
     * 
     * @returns {promise} promise the result of the database
     */
    followUser: (userId, followerId) => {

        return new Promise((resolve, reject) => {

            models.userFollowers.create({
                user_id: userId,
                follower_id: followerId
            }).then((result) => {
                resolve(result);

            }).catch((err) => {
                reject(err);

            });
        });
    },

    /**
     * @author Monzer Omer
     * @description Follow a new post when the user interacted with it or just if the user clicked follow this post
     * 
     * @param {string} postId the post that user interacted with
     * @param {string} userId the user who interacted with the post
     * 
     * @returns {promise} promise the result of the database
     */
    followPost: (postId, userId) => {

        return new Promise((resolve, reject) => {

            models.postFollowers.create({
                post_id: postId,
                user_id: userId
            }).then((result) => {
                resolve(result);

            }).catch((err) => {
                reject(err);

            });
        });

    },

    /**
     * @author Monzer Omer
     * @description create a new post record
     * 
     * @param {string} userId the user who created the post id 
     * @param {string} fileId the file that the user uploaded if there `null is allowed`
     * @param {string} body the text in the post if there `null is allowed`
     * 
     * @returns {promise} promise the result of the database
     */
    newPost: (userId, fileId, body) => {

        return new Promise((resolve, reject) => {

            models.posts.create({
                user_id: userId,
                file_id: fileId,
                body: body
            }).then((result) => {
                resolve(result);

            }).catch((err)=>{
                reject(err);

            });
        });

    }

}