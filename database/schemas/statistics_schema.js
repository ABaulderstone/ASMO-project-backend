const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StasticsSchema = new Schema( {
    date: {
        type: Date,
        required: true,
        unique: true,
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
    }
});

module.exports = StasticsSchema;
