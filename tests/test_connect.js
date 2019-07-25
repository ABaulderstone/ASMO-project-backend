require('dotenv').config();
const mongoose = require("mongoose");

function connectToTestEnv(){

  beforeEach(() => {
    mongoose.connect(process.env.DB_HOST_TEST, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    global.HTTPError = require("./../utils/HTTPError");
    mongoose.connection.on("error", err => console.log(err));
  });

  afterAll((done) => {
    function clearDB() {
        for (let i in mongoose.connection.collections) {
          mongoose.connection.collections[i].remove(function() {});
        }
        return done();
      }
      clearDB();

    mongoose.connection.close();
  });

}

module.exports = connectToTestEnv