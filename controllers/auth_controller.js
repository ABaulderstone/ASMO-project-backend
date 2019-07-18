const UserModel = require("./../database/models/user_model");
const JWTService = require("./../services/jwt_service");

function register(req, res, next) {
    const { email, password, confrimPassword} = req.body;
   console.log(req.body);
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
    console.log(user);
    const token = JWTService.generateToken(user);
    return res.json({ token });
}


module.exports = {
    register,
    login
}