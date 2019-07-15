async function create(req, res, next) {
    req.user.customers.push(req.body);
    console.log(req.body);
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
  
  async function update(req, res) {
    const { id } = req.params;
    const customer = req.user.customers.id(id);
   
    try {
      await req.user.save();
    } catch (err) {
      next(err);
    }
    return res.json(customer);
  }
  
  function show(req, res) {
    const { id } = req.params;
    const customer = req.user.staff.id(id);
    return res.json(customer);
  }
  
   async function destroy(req, res) {
      const { id } = req.params;
      const customer = req.user.staff.id(id);
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