const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StaffRatingSchema = new Schema ({
    owner: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    
    staffMember: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: "staff",
        required: true

    },

    total: {
    type: Number,
    min : 1
    },
    
    avg: {
    type: Number,
    min: 1,
    max: 5
    }

}

)

module.exports = StaffRatingSchema;