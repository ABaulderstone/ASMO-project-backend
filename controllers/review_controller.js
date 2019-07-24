const stats = require("./../services/statistics_service")

async function create(req, res, next) {
   req.user.reviews.push(req.body);
    const review = req.user.reviews[req.user.reviews.length -1];
    const {date, foodRating, serviceRating} = review;
    stats.createOrUpdate(req.user, date, foodRating, serviceRating);
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
    if (review) {
    return res.json(review);
    }
    return res.status(404).json({_error: "Review not found"});
  }
  
 
  
  module.exports = {
    create,
    index,
    show,
  };