const { body } = require("express-validator");
const userSigninValidationRules = () => {
  return [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .exists()
      .isLength({ min: 1 })
      .withMessage("Enter password"),
  ];
};

module.exports = userSigninValidationRules;
