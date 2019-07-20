async function create(req, res, next) {
  req.user.staff.push(req.body);
  console.log(req.body);
  try {
    await req.user.save();
    res.json(req.user.staff);
  } catch (err) {
    next(err);
  }
}

function index(req, res) {
  return res.json(req.user.staff);
}

async function update(req, res, next) {
  const { id } = req.params;
  const staffMember = req.user.staff.id(id);
  const { name } = req.body;
  staffMember.name = name;
  try {
    await req.user.save();
  } catch (err) {
    next(err);
  }
  return res.json(req.user.staff);
}

function show(req, res) {
  const { id } = req.params;
  const staffMember = req.user.staff.id(id);
   if (staffMember) {
     return res.json(staffMember);
   }
   return res.status(404).json({_error: "Staff Member not found"})
   
}

 async function destroy(req, res, next) {
    const { id } = req.params;
    const staffMember = req.user.staff.id(id);
    staffMember.remove();
    try {
        await req.user.save();
      } catch (err) {
        next(err);
      }
      
      return res.json(req.user.staff);


}

module.exports = {
  create,
  index,
  update,
  show,
  destroy
};
