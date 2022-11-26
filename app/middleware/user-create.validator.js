const {body} = require("express-validator");
const userValidationRules = [
    body("name").exists().isLength({min: 2}),
    body("email").isEmail(),
    body("password").isLength({min: 5}),
    body("confirmPassword")
        .isLength({min: 5})
        .custom((value, {req}) => {
            if (value !== req.body.password) {
                throw new Error("Password confirmation does not match password");
            }

            // Indicates the success of this synchronous custom validator
            return true;
        }),
    body("phone").isLength({min: 11, max: 11}),
];
module.exports = userValidationRules;
