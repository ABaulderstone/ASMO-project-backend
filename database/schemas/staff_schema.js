const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StaffSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    
    avatar: {
        type: String,
        required: true,
        default: "" 
    }
});

module.exports = StaffSchema;