const validate = require("./validate");
const validateAuthenticateRequest = require("./auth.validator");
const userValidationRules = require("./user-create.validator");
const userSigninValidationRules = require("./user-signin.validator");
const productValidators = require("./product");
module.exports = {
    validate,
    validateAuthenticateRequest,
    userValidationRules,
    userSigninValidationRules,
    ...productValidators
}