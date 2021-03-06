const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();
const CustomerController = require("./../controllers/customer_controller");
const RegularExpressions = require("./../utils/regex");


router.get("/", CustomerController.index);


router.post("/", celebrate({
    body: {
        name: Joi.string().required(),
        phone: Joi.string().regex(RegularExpressions.ausPhoneNumber).replace(/\s/g, ''),
        email: Joi.string().email().required(),
        birthday: Joi.string(),
        anniversary: Joi.string(),
        address: Joi.string(),
    }
}), CustomerController.create);


router.get("/:id" , CustomerController.show);

router.put("/:id", celebrate({
    body: {
        name: Joi.string().required(),
        phone: Joi.string().regex(RegularExpressions.ausPhoneNumber).replace(/\s/g, ''),
        email: Joi.string().email().required(),
        dob: Joi.date(),
        anniversary: Joi.date(),
        address: Joi.string(),
    }
}), CustomerController.update);

router.delete("/:id", CustomerController.destroy);

module.exports = router;