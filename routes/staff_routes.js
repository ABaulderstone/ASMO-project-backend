const express = require("express");
const { celebrate, Joi } = require("celebrate");
const router = express.Router();

router.post("/",  celebrate({
    body: {
        name: Joi.string().required(),
    }
}));

router.put("/edit", celebrate({
    body: {
        name: Joi.string().required(),
        
    }
}));
// Check with Alex on how to go about get reqeust for Staff
router.get("/index")
// Check with Alex on how to go about detleting request for Staff
router.delete("/delete")

module.exports = router;