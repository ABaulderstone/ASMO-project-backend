const mongoose = require("mongoose");
const StatisticsSchema = require("./../schemas/statistics_schema");
const StatisticsModel = mongoose.model("Statistics", StatisticsSchema);

module.exports = StatisticsModel;