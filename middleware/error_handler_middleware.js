module.exports = function(err, req, res, next) {
    console.log(err);
    if (err && err.name === "HTTPError") {
        return res.status(err.statusCode).json({_error: err.message});
    } else if (err && err.name==="ValidationError") {
        
         if(err.details[0].type ==="string.regex.base") {
            return res.status(422).json({ _error: "Not a valid Australian phone number"});
         }
        return res.status(422).json({ _error: err.details[0].message});
        
    }



    return next(err);
}