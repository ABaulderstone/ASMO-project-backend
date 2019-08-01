const passport = require("passport");

// using passport.authenticate as middleware here puts .user on the request so we can use it in our controller
// this lets us keep our controller logic a bit less convoluted.

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