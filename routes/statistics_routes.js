const express = require("express");
const router = express.Router();
const StatisticsController = require("./../controllers/statistics_controller");

router.get("/", StatisticsController.index);

module.exports = router;
