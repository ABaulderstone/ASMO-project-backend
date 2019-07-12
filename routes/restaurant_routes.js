const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();
const RestaurantController = require("./../controllers/restaurant_controller")


router.post("/",  celebrate({
    body: {
        name: Joi.string().required()
    }
}), RestaurantController.create );

router.put("/edit",  celebrate({
    body: {
        name: Joi.string().required()
    }
}));
// Check with Alex on how to go about get request for Restaurants
router.get("/", RestaurantController.index);

// Check with Alex on how to go about delete quest for Restaurants
router.delete("/delete")

module.exports = router;