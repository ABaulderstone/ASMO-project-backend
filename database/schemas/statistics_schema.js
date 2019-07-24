const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StasticsSchema = new Schema( {
    date: {
        type: String,
        required: true,
        
    }, 
    kitchen: {
        total: {
            type: Number,
            min: 1
        },
        avg: {
            type: Number,
            min: 1,
            max: 5
        }
    },
    floor: {
        total: {
            type: Number,
            min: 1
        },
        avg: {
            type: Number,
            min: 1,
            max: 5
        }
    },
    owner: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});

module.exports = StasticsSchema;
