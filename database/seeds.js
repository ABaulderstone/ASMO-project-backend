require("./connect");
const faker = require("faker");
const mongoose = require("mongoose");
const UserModel = require("./models/user_model")
const staffArray = []
const customersArray = []
const reviewsArray = []
for (let i = 0; i < 10; i++) {
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
        foodRating: Math.floor(Math.random() * 6) + 1,
        serviceRating: Math.floor(Math.random() * 6) + 1,
        comment: faker.lorem.paragraph(),
        date: faker.date.between("2019-6-15", "2019-7-23")
        })
    };

const User = new UserModel({
    staff: staffArray,
    customers: customersArray,
    reviews: reviewsArray,
    email: "test@asmo.com"
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







