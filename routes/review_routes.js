const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();
const ReviewController = require("./../controllers/review_controller");

router.get("/", ReviewController.index);

router.post("/", celebrate({
    body: {
        foodRating: Joi.number().integer().min(1).max(5).required(),
        serviceRating: Joi.number().integer().min(1).max(5).required(),
        comment: Joi.string().max(250),
        kitchenStaff: Joi.array(),
        floorStaff: Joi.array()
    }
}), 
 ReviewController.create)

router.get("/:id", ReviewController.show);

module.exports = router;
