require("dotenv").config();

const sgMail = require('@sendgrid/mail');
const sendConfirmMail = () => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log(process.env.SENDGRID_API_KEY)
    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    const msg = {
        to: 'obpumanee@gmail.com',
        from: 'test@example.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong> <a href="https://www.google.com">click<a/>'
    };
    sgMail.send(msg);
    console.log("we made it")
};

module.exports = { sendConfirmMail }; 
