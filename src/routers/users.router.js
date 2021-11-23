const usersRouter = require("express").Router(),
    {
        login,
        loginRenderer,
        register,
        registerRenderer
    } = require("../controllers/users.controller");

usersRouter.get("/users/login", loginRenderer);
usersRouter.get("/users/register", registerRenderer)
usersRouter.post("/users/register", register);
usersRouter.post("/users/login", login);
// usersRouter.get("/test", (req, res, next)=> {

// });

module.exports = usersRouter;