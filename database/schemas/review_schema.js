const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({

    bill: {
        type: Number,
        required: true,
    },
    foodRating: {
        type: Number,
        required: true,
    },
    serviceRating: {
        type: Number,
        required: true,
        default: 0
    },

    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    staff: []

});

module.exports = ReviewSchema;