const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();
// const RestaurantController = require("./../controllers/restaurant_controller")


router.post("/",  celebrate({
    body: {
        name: Joi.string().required()
    }
}));

router.put("/edit",  celebrate({
    body: {
        name: Joi.string().required()
    }
}));

router.get("/index")

module.exports = router;