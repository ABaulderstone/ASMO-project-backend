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
        default: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" 
    }
});

module.exports = StaffSchema;