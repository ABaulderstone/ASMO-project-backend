const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const passport = require("./config/passport");


const whitelist = [
    "http://satisfeed-react-app.s3-website-ap-southeast-2.amazonaws.com/",
    "http://localhost:3001"
  ]
  
  app.use(cors({
    origin: (origin, callback) => {
      if(whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      }
      // create `DEV_TESTING` variable in env to allow tests through cors.
      // WARNING: DO NOT CREATE THIS ENV VARIABLE ON PRODUCTION
      else if(process.env.DEV_TESTING){
        callback(null, true);
      }
      else {
        callback(new Error('Not allowed. Blocked by CORS.'));
      }
    }
  }));
  
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("combined"));
app.use(passport.initialize());
app.use(require("./routes"));
app.use(express.static("public"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;