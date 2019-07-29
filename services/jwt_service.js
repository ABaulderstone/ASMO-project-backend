const JWT = require("jsonwebtoken");
const expiry = "10h";

function generateToken(user) {
    const token = JWT.sign(
        {
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            subject: user._id.toString(),
            expiresIn: expiry
        }
    );

    return token;
}

function generateResetToken(user) {
    const token = JWT.sign({
        email: user.email
    },
    process.env.JWT_SECRET,
    {
        subject: user._id.toString(),
        expiresIn: "1h"
    }
);
return token;
    
}

module.exports = {
    generateToken,
    generateResetToken
}