const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();
const CustomerController = require("./../controllers/customer_controller")


router.get("/", CustomerController.index);


router.post("/", celebrate({
    body: {
        name: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
        dob: Joi.date(),
        anniversary: Joi.date(),
        address: Joi.string(),
    }
}), CustomerController.create);


router.get("/:id" , CustomerController.show);

router.put("/:id", celebrate({
    body: {
        name: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
        dob: Joi.date(),
        anniversary: Joi.date(),
        address: Joi.string(),
    }
}), CustomerController.update);

router.delete("/:id", CustomerController.destroy);

module.exports = router;