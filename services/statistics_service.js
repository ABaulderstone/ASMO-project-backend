const StatisticsModel = require("./../database/models/statistics_model");
const create = (kitchenRating, floorRating) => {}
const update = (kitchenRating, floorRating) => {}
const createOrUpdate = (date, kitchenRating, floorRating) => {
    const query = StatisticsModel.exists({date: date});
    console.log(query);

}

module.exports = {
    createOrUpdate,
}