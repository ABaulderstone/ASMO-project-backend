const passport = require("passport");

const localAuthMiddleware = (req, res, next) => {
    const passportMiddleware = passport.authenticate("local", {session:false}, (err, user, info) => {
        if (info){
         return next(new HTTPError(401, info.message));
        }
         return req.logIn(user, err => {
            return next(err);
         });
        
    });
    passportMiddleware(req, res, next);
}


module.exports = localAuthMiddleware