const { body } = require("express-validator");
const userSigninValidationRules = () => {
  return [body("email").isEmail().withMessage("Invalid email address")];
};

module.exports = userSigninValidationRules;
