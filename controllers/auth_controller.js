const UserModel = require("./../database/models/user_model");
const JWTService = require("./../services/jwt_service");
const MailService = require("./../services/mail_service");


function register(req, res, next) {
    const { email, password, confrimPassword} = req.body;
   // throwing the error here passes it to error handling middleware and then onto the frontend
    if (password !== confrimPassword) {
        return next(new HTTPError(400, "Password and Confirm Password must match"));
    }
    
    const user = new UserModel({ email });

    UserModel.register(user, password, (err, user) => {
        if (err) {
            return next(new HTTPError(500, err.message));
        }

        const token = JWTService.generateToken(user);

        return res.json({ token });        
    });
}

// we have .user property on req because of passport local stategy middleware in routes
function login(req,res,next) {
    const user = req.user;
    const token = JWTService.generateToken(user);
    return res.json({ token });
}

async function sendForgotPasswordEmail (req,res,next) {
   
    const user =  await UserModel.findOne({email: req.body.email});
   
   
    if (user) {
        const {email} = user;
        const token = JWTService.generateResetToken(user);
    
       MailService.sendForgottenPasswordEmail(email, token);
       return res.send(token);

    } 
    return next(new HTTPError(422, "No account associated with this email"));


}


module.exports = {
    register,
    login,
    sendForgotPasswordEmail
}