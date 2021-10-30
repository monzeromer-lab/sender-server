const usersRouter = require("express").Router(),
      controllers = require("../controllers/users.controller");

usersRouter.get("/users/login", controllers.loginRenderer);
usersRouter.get("/users/register", controllers.registerRenderer)
usersRouter.post("/users/register", controllers.register);
usersRouter.post("/users/login", controllers.login);
// usersRouter.get("/test", (req, res, next)=> {

// });

module.exports = usersRouter;