const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();
const StaffController = require("./../controllers/staff_controller")

router.post("/",  celebrate({
    body: {
        name: Joi.string().required(),
        avatar: Joi.string()
    }
}),StaffController.create);

router.put("/:id", celebrate({
    body: {
        name: Joi.string().required(),
        avatar: Joi.string()
        
    }
}),StaffController.update);

router.get("/", StaffController.index)

router.get("/:id", StaffController.show)


// Check with Alex on how to go about detleting request for Staff
router.delete("/:id", StaffController.destroy);

module.exports = router;