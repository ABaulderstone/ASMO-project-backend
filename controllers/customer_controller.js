async function create(req, res, next) {
  req.user.customers.push(req.body);

  try {
    await req.user.save();
  } catch (err) {
    next(err);
  }
   return res.json(req.user.customers);
}

function index(req, res) {
  return res.json(req.user.customers);
}

async function update(req, res, next) {
  const { id } = req.params;
  const customer = req.user.customers.id(id);
  const {name, phone, email} = req.body;
  customer.name = name;
  customer.phone = phone;
  customer.email = email;
 
  try {
    await req.user.save();
  } catch (err) {
    next(err);
  }
  return res.json(customer);
}

function show(req, res) {
  const { id } = req.params;
  const customer = req.user.customers.id(id);
  if (customer) {
  return res.json(customer);
  }
  return res.status(404).json({_error: "Customer not found"});
}

 async function destroy(req, res, next) {
    const { id } = req.params;
    const customer = req.user.customers.id(id);
    customer.remove();
    try {
        await req.user.save();
      } catch (err) {
        next(err);
      }
      
      return res.json(req.user.customers);


}

module.exports = {
  create,
  index,
  update,
  show,
  destroy
};
