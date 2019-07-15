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

async function update(req,res) {
    const {id} = req.params;    
    const staffMember = req.user.staff.id(id);
    const {name} = req.body
    staffMember.name = name;
    try {
        await req.user.save();
        res.json(staffMember);
    } catch( err ) {
        next(err);
    }



}

function show(req, res) {
    const {id} = req.params;    
    const staffMember = req.user.staff.id(id);
    return res.json(staffMember);

}

module.exports = {
    create,
    index,
    update,
    show
}