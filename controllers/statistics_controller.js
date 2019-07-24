const StatisticsModel = require("./../database/models/statistics_model");

async function index(req, res, next) {
  const { _id } = req.user;
  const { date } = req.query;

    if (date) {
        StatisticsModel.find({ owner: _id, date: date }, (err, document) => {
            if (err) {
            next(err);
            }
            if (document.length > 0) {
            return res.send(document);
            }
            return res.status(422).json({ _error: "No records for this date" });
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
