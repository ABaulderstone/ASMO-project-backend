const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    phone: {
        type: Number, 
        required: true
    },

    email: {
        type: String,
        required: true
    },

    dob: {
        type: Date,
        required: false,
        default: new Date()
    },

    anniversary: {
        type: String,
        required: false
    },

    address: {
        type: String,
        required: false
    }
    

});

module.exports = CustomerSchema;