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

router.post("/duty", StaffController.setRoster);

router.put("/:id", celebrate({
    body: {
        name: Joi.string().required(),
        avatar: Joi.string(),
        duty: Joi.string()
        
    }
}),StaffController.update);

router.get("/", StaffController.index)

router.get("/:id", StaffController.show)

router.delete("/:id", StaffController.destroy);

module.exports = router;