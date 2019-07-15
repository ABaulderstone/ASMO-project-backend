const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();
const ReviewController = require("./../controllers/review_controller");

router.get("/", celebrate({
    body: {
        foodRating: Joi.string().required(),
        serviceRating: Joi.number().required(),
        comment: Joi.string()

    }
}), ReviewController.index);

router.post("/", 
 ReviewController.create)

router.get("/:id", ReviewController.show);

module.exports = router;
