const StatisticsModel = require("./../database/models/statistics_model");
const moment = require("moment");
const tz = require("moment-timezone");

const calculateNew = (total, average, incoming) => {
    const newAvg = ((total * average) + incoming) / (total +1); 
    return newAvg 
}

const create = (date, kitchenRating, floorRating) => {
  StatisticsModel.create({
    date: date,
    kitchen: {
        total: 1, 
        avg: kitchenRating
    },
    floor: {
        total: 1,
        avg: floorRating
    }
  });
};

const update = (date,kitchenRating, floorRating) => {
  console.log("update", kitchenRating, floorRating);
  StatisticsModel.findOne({date:date}, (err, res) => {
      if (err) {
          console.log(err);
      }
      const {total:kitchenTotal, avg:kitchenAvg} = res.kitchen;
      const newKitchenAvg = ((kitchenTotal * kitchenAvg) + kitchenRating) / (kitchenTotal + 1);
      res.kitchen.avg = newKitchenAvg;
      res.kitchen.total = kitchenTotal + 1;
      const {total:floorTotal, avg:floorAvg} = res.floor;
      const newFloorAvg = ((floorTotal * floorAvg) + floorRating) / (floorTotal + 1);
      res.floor.avg = newFloorAvg;
      res.floor.total = floorTotal + 1;
      res.save((err, model) => {
          if (err) { return console.log(err)};
      });

       
  })
};

const createOrUpdate = async (date, kitchenRating, floorRating) => {
  const formattedDate = moment(date)
    .tz("Australia/Sydney")
    .format("DD-MM-YYYY");
  const documentExists = await StatisticsModel.exists({ date: formattedDate });

  if (documentExists) {
    return update(formattedDate, kitchenRating, floorRating);
  }

  return create(formattedDate, kitchenRating, floorRating);
};

module.exports = {
  createOrUpdate
};
