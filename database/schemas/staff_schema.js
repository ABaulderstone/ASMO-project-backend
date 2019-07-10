const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StaffSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    role: {
        type: String, 
        required: true,
        default: ""
        
    }

});

module.exports = StaffSchema;