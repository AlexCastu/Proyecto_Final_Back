const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
   path: path.resolve(__dirname, "envs/" + process.env.NODE_ENV + ".env"),
});

module.exports = {
   NODE_ENV: process.env.NODE_ENV || "development",
   HOST: process.env.HOST || "127.0.0.1",
   PORT: process.env.PORT || 4000,
};
