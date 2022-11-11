const jwt = require("jsonwebtoken");
require("dotenv/config");

const genAccessToken = (userEmail, expiresIn) => {
  return jwt.sign({ email: userEmail }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: expiresIn,
  });
};

module.exports = genAccessToken;
