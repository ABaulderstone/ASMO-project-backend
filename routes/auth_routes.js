const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const AuthController = require("./../controllers/auth_controller");
const localAuthMiddleWare = require("./../middleware/auth_middleware")
const passport = require("passport");

router.post("/register", celebrate({
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), AuthController.register);

// using passport.authenticate as middleware here puts .user on the request so we can use it in our controller
// this lets us keep our controller logic a bit less convoluted. 

router.post("/login", celebrate({
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}),localAuthMiddleWare, AuthController.login);

module.exports = router;