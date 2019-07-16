require("dotenv").config();

const sgMail = require('@sendgrid/mail');
const sendConfirmMail = (email, name, resturantName) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log(process.env.SENDGRID_API_KEY)
    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    const msg = {
        to: `${email}`,
        from: `admin@${resturantName}.com`,
        subject: `Thank you for registering ${name}`,
        text: `Hi ${name}`,
        html: 
    };
    sgMail.send(msg);
    console.log("we made it")
};

module.exports = { sendConfirmMail }; 
