const express = require("express");
const router = express.Router();
const ImageController = require("./../controllers/image_controller");

router.post("/", ImageController.create)

module.exports = router
