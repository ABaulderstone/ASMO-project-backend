const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({

   
    foodRating: {
        type: Number,
        required: true,
    },
    serviceRating: {
        type: Number,
        required: true,

    },

    comment: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    kitchenStaff: {
        type: Array,
        required: true

    },
    floorStaff : {
        type: Array,
        required: true
    }


});



module.exports = ReviewSchema;