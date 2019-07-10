const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    staff: [StaffShcema],
    customers: [CustomerSchema],
    reviews: [ReviewSechema]

});

module.exports = RestaurantSchema;


