const StatisticsModel = require("./../database/models/statistics_model");
const StaffRatingModel = require("./../database/models/staff_rating_model")
const moment = require("moment");
const tz = require("moment-timezone");


const calculateNew = (total, average, incoming) => {
    const newAvg = ((total * average) + incoming) / (total +1); 
    return newAvg 
}



const createOrUpdateRatings= async (user, date, kitchenRating, floorRating) => {
  const formattedDate = moment(date)
    .tz("Australia/Sydney")
    .format("DD-MM-YYYY");
  const documentExists = await StatisticsModel.exists({ date: formattedDate, owner: user._id });
  console.log(formattedDate, user);
  if (documentExists) {
    return updateRating(user, formattedDate, kitchenRating, floorRating);
  }

  return createRating(user, formattedDate, kitchenRating, floorRating);
};

const createRating = (user, date, kitchenRating, floorRating) => {
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

const updateRating = (user,date,kitchenRating, floorRating) => {
  
  StatisticsModel.findOne({date:date, owner: user._id}, (err, res) => {
      
    if (err) {
          console.log(err);
      }
      
      const {total:kitchenTotal, avg:kitchenAvg} = res.kitchen;
      const newKitchenAvg = calculateNew(kitchenTotal, kitchenAvg, kitchenRating)
      res.kitchen.avg = newKitchenAvg;
      res.kitchen.total = kitchenTotal + 1;
      
      const {total:floorTotal, avg:floorAvg} = res.floor;
      const newFloorAvg = calculateNew(floorTotal, floorAvg, floorRating);
      res.floor.avg = newFloorAvg;
      res.floor.total = floorTotal + 1;
      
      res.save((err, model) => {
          if (err) { return console.log(err)};
      });

       
  })
};


const createOrUpdateStaffRating =  async (user, kitchenStaff, floorStaff, kitchenRating, floorRating) => {



  kitchenStaff.forEach(staffMember => {
    
    const documentExists = await StaffRatingModel.exists({owner: user._id, staffMember: staffMember._id })
        
    if (documentExists) {
        return updateStaffRating(user, staffMember, kitchenRating);
        }
        return createStaffRating(user, staffMember, kitchenRating);
    })
    
    floorStaff.forEach(staffMember => {
      
      const documentExists = await StaffRatingModel.exists({owner: user._id, staffMember: staffMember._id })
          
      if (documentExists) {
            return updateStaffRating(user, staffMember, floorRating);
          }
          return createStaffRating(user, staffMember, floorRating);
      })

}

const createStaffRating = (user, staffMember, rating) => {
  StaffRatingModel.create(
    {
      owner: user._id,
      staffMember: staffMember._id,
      total: 1,
      avg: rating


    }
  )

}

const updateStaffRating = (user, staffMember,rating) => {
  StaffRatingModel.findOne({owner:user._id, staffMember: staffMember._id}, (err, res) => {
    if (err) {
      return console.log(err);
    }
    const {total, avg} = res;
    const newAvg = calculateNew(total, avg, rating);
    res.avg = newAvg
    res.total += 1;

  })

}
module.exports = {
  createOrUpdateRatings,
  createOrUpdateStaffRating
};
