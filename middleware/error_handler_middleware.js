module.exports = function(err, req, res, next) {
    console.log(err);
    if (err && err.name === "HTTPError") {
        return res.status(err.statusCode).json({_error:err.message});
    } else if (err && err.name==="ValidationError") {
        console.log(err.details[0].message)
        return res.status(422).json({ _error: err.details[0].message});
        
    }



    return next(err);
}