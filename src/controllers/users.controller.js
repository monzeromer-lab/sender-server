const queries = require("../database/queries"),
    auth = require("../auth/index"),
    {
        token_secret
    } = require("../../config/configiration");


module.exports = {

    /*
        controller for render login page or the home page
    */
    loginRenderer: (req, res, next) => {

        let {
            token = null
        } = req.cookies;

        if (token)
            res.status(200).redirect("/home");
        else
            res.status(200).render('login');
    },

    /*
        controller for render register page or the home page
    */
    registerRenderer: (req, res, next) => {
        
        let {
            token = null
        } = req.cookies;

        if (token)
            res.status(200).redirect("/home");
        else
        res.status(200).render('register');
    },

    /*
        controller for register new user
    */
    register: (req, res, next) => {

        // make the default value for all the data is null
        let {
            firstname = null,
                lastname = null,
                password = null,
                username = null,
                birthdate = null
        } = req.body;

        // check if there's a user with the same username
        queries.getOneUser(username).then((result) => {
            if (result) {
                // encode the password
                auth.modules.passwordEncode(password).then((hash) => {

                    // save the user in the database
                    queries.addUser(firstname, lastname, birthdate, username, hash).then((result) => {

                        // generate json web token
                        auth.token.generate({
                            username: username,
                            id: result.id
                        }, token_secret).then((token) => {

                            // response with 201 and render home page
                            res.cookie("token", `Bearer ${token}`).status(201).render("home");

                            // catch any error in create the token
                        }).catch((err) => {
                            next(err);
                        })

                        // catch any error in save the user
                    }).catch((err) => {
                        next(err);
                    });

                    // catch any error in encode the password
                }).catch((err) => {
                    next(err);
                });

                // if there's a username already with the same username
            } else {

                // response with 403 and render register page
                res.status(403).render("register");
            }

            // catch any error in checking the username
        }).catch((err) => {
            next(err);
        });

    },

    /*
        controller for login user
    */
    login: (req, res, next) => {

        // make the values null by default
        let {
            username = null,
                password = null
        } = req.body;

        // get the userdata using the username
        queries.getOneUser(username).then((result) => {

            // if there's a user
            if (result) {

                // compare the password with the hashed one
                auth.modules.passwordCompare(password, result.password).then((state) => {

                    // extract all the values from the result
                    let {
                        id,
                        username,
                        firstname,
                        lastname,
                        birthdate
                    } = result;

                    // if the password is correct
                    if (state) {

                        // generate new token
                        auth.token.generate({
                            userId: id,
                            username: username
                        }, token_secret).then((token) => {

                            // response with 201 and send the token
                            res.cookie("token ", token).status(201).render("home", {
                                id,
                                username,
                                firstname,
                                lastname,
                                birthdate
                            });

                            // handel errors
                        }).catch((err) => {
                            next(err);
                        })

                        // if the password is incorrect
                    } else {

                        // response with 403 and render login page
                        res.status(403).render("login");
                    }

                    // handel errors
                }).catch((err) => {
                    next(err);
                })

                // if the username isn't valid
            } else {

                // response with 403 and render login page
                res.status(403).render("login");
            }

            // handel errors
        }).catch((err) => {
            next(err);
        })
    }
}