const dotenv = require("dotenv");
const path = require("path");

console.log(process.env);
dotenv.config({
   path: path.resolve(__dirname, "envs/" + process.env.NODE_ENV + ".env"),
});

module.exports = {
   NODE_ENV: process.env.NODE_ENV || "development",
   HOST: process.env.HOST || "0.0.0.0",
   PORT: process.env.PORT || 3000,
};
