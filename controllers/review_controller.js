async function create(req, res, next) {
    req.user.reviews.push(req.body);
    console.log(req.body);
    try {
      await req.user.save();
    } catch (err) {
      next(err);
    }
    return res.json(req.user.reviews);
  }
  
  function index(req, res) {
    return res.json(req.user.reviews);
  }
  

  
  function show(req, res) {
    const { id } = req.params;
    const review = req.user.reviews.id(id);
    return res.json(review);
  }
  
 
  
  module.exports = {
    create,
    index,
    show,
  };