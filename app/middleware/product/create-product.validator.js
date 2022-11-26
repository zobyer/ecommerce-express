const {body} = require("express-validator");
const productValidations = [
    body("name").exists().isLength({min: 2}).withMessage("name length must be greater than 2"),
    body("description").exists().isLength({min: 25}).withMessage("description length must be greater than 25"),
    body("image").exists().isLength({min: 10}).withMessage("image link's length must be greater than 10"),
    body("price").exists().isInt({min: 0}).withMessage("price must be greater than 0")
];
module.exports = productValidations;
