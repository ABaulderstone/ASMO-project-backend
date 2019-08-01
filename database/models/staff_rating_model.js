const mongoose = require("mongoose");
const StaffRatingSchema = require("./../schemas/staff_rating_schema");
const StaffRatingModel = mongoose.model("StaffRating", StaffRatingSchema);

module.exports = StaffRatingModel;