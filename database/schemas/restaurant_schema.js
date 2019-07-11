const mongoose = require("mongoose");
const StaffSchema = require("./staff_schema");
const CustomerSchema = require("./customer_schema");
const ReviewSchema = require("./review_schema");
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    staff: [StaffSchema],
    customers: [CustomerSchema],
    reviews: [ReviewSchema]

});

module.exports = RestaurantSchema;


