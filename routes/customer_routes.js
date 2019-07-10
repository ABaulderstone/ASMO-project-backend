const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();


router.get("/", celebrate({
    body: {
        name: Joi.string().required()
    }
}));

router.post("/create", celebrate({
    body: {
        name: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
        dob: Joi.date(),
        anniversary: Joi.date(),
        address: Joi.string(),
    }
}));

router.put("/edit", celebrate({
    body: {
        name: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
        dob: Joi.date(),
        anniversary: Joi.date(),
        address: Joi.string(),
    }
}));

module.exports = router;