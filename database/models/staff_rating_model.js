const mongoose = require("mongoose");
const StaffRatingSchema = require("./../schemas/staff_rating_schema");
const StaffRatingModel = mongoose.model("Statistics", StaffRatingSchema);

module.exports = StaffRatingModel;