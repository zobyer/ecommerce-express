const jwt = require("jsonwebtoken");
require("dotenv/config");

const genAccessToken = (userEmail) => {
  return jwt.sign({ email: userEmail }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });
};

module.exports = genAccessToken;
