async function create(req, res, next) {
    req.user.staff.push(req.body);
    console.log(req.body);
    try {
        await req.user.save();
        res.json(req.user.staff);
    } catch( err ) {
        next(err);
    }
}

function index(req, res) {
    return res.json(req.user.staff);
}

function edit(req,res) {

}

module.exports = {
    create,
    index
}