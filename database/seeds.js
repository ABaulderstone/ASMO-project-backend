require("./connect");
const faker = require("faker");
const mongoose = require("mongoose");
const UserModel = require("./models/user_model")
const stats = require("./../services/statistics_service");


function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// for (let i = 0; i < 20; i++) {
//     staffArray.push({
//         name: faker.name.findName(),
//         avatar: faker.image.avatar()
//     })
// };
// for (let i = 0; i < 50; i++) {
//         customersArray.push({
//             name: faker.name.findName(),
//             phone: faker.phone.phoneNumber("04########"),
//             email: faker.internet.email()
//         })
//     };


  

const User = new UserModel({
    staff: [],
    customers: [],
    reviews: [],
    email: "test@asmo.com"
});


const passwordAndSave = async () => {
    try {
        await User.setPassword("hello1");
        await User.save()
        return User;
    } catch (err) {
        console.log(err);
    }
} 


passwordAndSave()
.then( async (user) => {

    for (let i = 0; i < 20; i++) {
       const staffMember = {
            name: faker.name.findName(),
            avatar: faker.image.avatar()
        }
        user.staff.push(staffMember)
        await user.save();
        console.log(`${i} staff member created`)
    };

    for (let i = 0; i < 50; i++) {
         const customer = {
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber("04########"),
            email: faker.internet.email()
        }
        user.customers.push(customer)
        await user.save();
        console.log(`${i} customer created`)

    };

    const staffArray = user.staff;

    for (let i = 0; i < 100; i++) {
       const review = {
        foodRating: randomIntFromInterval(1,5),
        serviceRating: randomIntFromInterval(1,5),
        comment: faker.lorem.paragraph(),
        date: faker.date.between("2019-6-15", "2019-7-23"),
        kitchenStaff: [staffArray[randomIntFromInterval(0,2)], staffArray[randomIntFromInterval(3,5)], staffArray[randomIntFromInterval(6,8)]],
        floorStaff: [staffArray[randomIntFromInterval(9,11)], staffArray[randomIntFromInterval(12,14)], staffArray[randomIntFromInterval(15,18)]]
        }

        const {foodRating, serviceRating, date, kitchenStaff, floorStaff} = review;
        stats.createOrUpdateRatings(user, date, foodRating, serviceRating);
        stats.createOrUpdateStaffRating(user, kitchenStaff,floorStaff, foodRating, serviceRating);
        user.reviews.push(review);
        await user.save();
    };
}

)
.catch( err => {
    console.log("review error");
}
    
);


console.log("one user saved")







