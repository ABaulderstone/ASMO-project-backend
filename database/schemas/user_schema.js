const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const StaffSchema = require("./staff_schema");
const CustomerSchema = require("./customer_schema");
const ReviewSchema = require("./review_schema");


// Passport-Local Mongoose will add a username, hash and salt field to store the
// username, the hashed password and the salt value. Additionally Passport-Local
// Mongoose adds some methods to your Schema.
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    resturantName: {  
        type: String, 
        required: true,
        default: "Land of Smiles"
    },
    staff: [StaffSchema],
    customers: [CustomerSchema],
    reviews: [ReviewSchema],
});

const options = {
    usernameField: "email", 
    errorMessages: {
        IncorrectPasswordError: 'Incorrect username or password',
        IncorrectUsernameError: 'Incorrect username or password'
    }
}

UserSchema.plugin(passportLocalMongoose, options );

module.exports = UserSchema;