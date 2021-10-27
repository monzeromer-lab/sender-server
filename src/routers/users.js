const queries = require("../database/queries"),
     usersRouter = require("express").Router();

usersRouter.get("/users" , (req, res , next)=> {
      res.status(200).render('home');
});

module.exports = usersRouter;
