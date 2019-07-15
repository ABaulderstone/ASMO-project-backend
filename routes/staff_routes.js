const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();
const StaffController = require("./../controllers/staff_controller")

router.post("/",  celebrate({
    body: {
        name: Joi.string().required(),
    }
}),StaffController.create);

router.put("/edit", celebrate({
    body: {
        name: Joi.string().required(),
        
    }
}));

router.get("/", StaffController.index)


// Check with Alex on how to go about detleting request for Staff
router.delete("/delete")

module.exports = router;