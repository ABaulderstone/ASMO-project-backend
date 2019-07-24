const StatisticsModel = require("./../database/models/statistics_model");
const moment = require("moment");
const tz = require("moment-timezone");

const calculateNew = (total, average, incoming) => {
    const newAvg = ((total * average) + incoming) / (total +1); 
    return newAvg 
}

const create = (user, date, kitchenRating, floorRating) => {
  StatisticsModel.create({
    date: date,
    kitchen: {
        total: 1, 
        avg: kitchenRating
    },
    floor: {
        total: 1,
        avg: floorRating
    },
    owner: user._id
  });
};

const update = (user,date,kitchenRating, floorRating) => {
  console.log("update", kitchenRating, floorRating);
  StatisticsModel.findOne({date:date, owner: user._id}, (err, res) => {
      console.log(res);
    if (err) {
          console.log(err);
      }
      const {total:kitchenTotal, avg:kitchenAvg} = res.kitchen;
      const newKitchenAvg = ((kitchenTotal * kitchenAvg) + kitchenRating) / (kitchenTotal + 1);
      console.log("kitchen", newKitchenAvg);
      res.kitchen.avg = newKitchenAvg;
      res.kitchen.total = kitchenTotal + 1;
      const {total:floorTotal, avg:floorAvg} = res.floor;
      const newFloorAvg = ((floorTotal * floorAvg) + floorRating) / (floorTotal + 1);
      console.log("floor", newFloorAvg);
      res.floor.avg = newFloorAvg;
      res.floor.total = floorTotal + 1;
      res.save((err, model) => {
          if (err) { return console.log(err)};
      });

       
  })
};

const createOrUpdate = async (user, date, kitchenRating, floorRating) => {
  const formattedDate = moment(date)
    .tz("Australia/Sydney")
    .format("DD-MM-YYYY");
  const documentExists = await StatisticsModel.exists({ date: formattedDate, owner: user._id });
  console.log(formattedDate, user);
  if (documentExists) {
    return update(user, formattedDate, kitchenRating, floorRating);
  }

  return create(user, formattedDate, kitchenRating, floorRating);
};

module.exports = {
  createOrUpdate
};
