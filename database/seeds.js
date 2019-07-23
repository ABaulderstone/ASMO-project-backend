require("./connect");
const faker = require("faker");
const mongoose = require("mongoose");
const UserModel = require("./models/user_model")
const staffArray = []
const customersArray = []
const reviewsArray = []

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

for (let i = 0; i < 15; i++) {
    staffArray.push({
        name: faker.name.findName(),
        avatar: faker.image.avatar()
    })
};
for (let i = 0; i < 50; i++) {
        customersArray.push({
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber("04########"),
            email: faker.internet.email()
        })
    };

    for (let i = 0; i < 100; i++) {
        reviewsArray.push({
        foodRating: randomIntFromInterval(1,5),
        serviceRating: randomIntFromInterval(1,5),
        comment: faker.lorem.paragraph(),
        date: faker.date.between("2019-6-15", "2019-7-23"),
        kitchenStaff: [staffArray[randomIntFromInterval(0,2)], staffArray[randomIntFromInterval(3,5)], staffArray[randomIntFromInterval(6,8)]],
        floorStaff: [staffArray[randomIntFromInterval(9,10)], staffArray[randomIntFromInterval(11,12)], staffArray[randomIntFromInterval(13,15)]]

        })
    };

const User = new UserModel({
    staff: staffArray,
    customers: customersArray,
    reviews: reviewsArray,
    email: "test2@asmo.com"
});

const passwordAndSave = async () => {
    try {
        await User.setPassword("hello1");
        await User.save()
    } catch (err) {
        console.log(err);
    }
} 

passwordAndSave();
console.log("one user saved")







