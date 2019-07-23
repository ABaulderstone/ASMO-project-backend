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
  const {duty:role} = req.query;
  const {staff} = req.user;
  
  if (role) { 
    const staffByDuty = staff.filter(obj => obj.duty===role);
    if (staffByDuty.length > 0) {
      return res.json(staffByDuty)
    }
    return res.status(422).json({ _error: "Invalid Query" });

  }

  return res.json(staff);
}

async function update(req, res, next) {
  const { id } = req.params;
  const staffMember = req.user.staff.id(id);
  const { name, avatar } = req.body;
  staffMember.avatar = avatar;
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

async function setRoster(req, res, next) {
  const staffDuites = Object.entries(req.body);
  staffDuites.forEach( (element) => {
    const staffMember = req.user.staff.id(element[0]);
    console.log(staffMember);
    staffMember.duty = element[1];
  });

  try {
    await req.user.save();
  } catch (err) {
    next(err);
  }
  return res.json(req.user.staff)

}

module.exports = {
  create,
  index,
  update,
  show,
  destroy,
  setRoster
};
