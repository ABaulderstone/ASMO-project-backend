const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const AuthController = require("./../controllers/auth_controller");
const localAuthMiddleWare = require("./../middleware/auth_middleware")


router.post("/register", celebrate({
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        confrimPassword: Joi.string().required()
    }
}), AuthController.register);

 // localAuthMiddleware is a custom middleware I wrote specifically because passport-local-mongoose doesn't throw an error on a failed login
 // this takes "info" and throws a HTTP error which can be handled by error handling middleware and ultimately passed to the front end

router.post("/login", celebrate({
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}),localAuthMiddleWare, AuthController.login);

router.post("/forgot_password", celebrate({
    body: {
        email: Joi.string().email().required()
    }
}), AuthController.sendForgotPasswordEmail)

module.exports = router;