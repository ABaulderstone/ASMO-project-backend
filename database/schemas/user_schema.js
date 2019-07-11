const { Schema } = require("mongoose");
const RestaurantSchema = require("./restaurant_schema");


// Passport-Local Mongoose will add a username, hash and salt field to store the
// username, the hashed password and the salt value. Additionally Passport-Local
// Mongoose adds some methods to your Schema.
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    restaurants: [RestaurantSchema]
});

const options = {
    usernameField: "email", 
    errorMessages: {
        IncorrectPasswordError: 'Password or username are incorrect',
        IncorrectUsernameError: 'Password or username are incorrect'
    }
}

UserSchema.plugin(passportLocalMongoose, options );

module.exports = UserSchema;