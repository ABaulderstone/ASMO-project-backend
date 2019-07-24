const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    phone: {
        type: String, 
        required: true
    },

    email: {
        type: String,
        required: true
    },

    birthday: {
        type: String,
        required: false,
        
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