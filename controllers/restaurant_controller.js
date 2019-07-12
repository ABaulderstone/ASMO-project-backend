async function create(req, res, next) {
    req.user.restaurants.push(req.body);
    try {
        await req.user.save();
        res.json(req.user.restaurants);
    } catch( err ) {
        next(err);
    }
}

function index(req, res) {
    return res.json(req.user.restaurants);
    console.log("here");
}

module.exports = {
    create,
    index
}