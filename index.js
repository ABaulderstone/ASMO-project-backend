require("dotenv").config();
require("./database/connect");
const app = require('./app');

global.HTTPError = require("./utils/HTTPError");

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));