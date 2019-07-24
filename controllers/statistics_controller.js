const StatisticsModel = require("./../database/models/statistics_model");

async function index(req, res, next) {
  const { _id } = req.user;
  const { date } = req.query;

    if (date) {
        StatisticsModel.find({ owner: _id, date: date }, (err, document) => {
            if (err) {
            next(err);
            }
            return res.send(document);
        });
    }

  StatisticsModel.find({ owner: _id }, (err, document) => {
    if (err) {
      next(err);
    }
    return res.send(document);
  });
}

module.exports = {
  index
};
