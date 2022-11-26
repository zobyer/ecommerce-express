module.exports = (app) => {
    const users = require("../controllers/auth/user.controller");
    const router = require("express").Router();

    const userValidationRules = require("../middleware/user-create.validator");
    const userSigninValidationRules = require("../middleware/user-signin.validator");
    const validate = require("../middleware/validate");
    const validateAuthenticateRequest = require("../middleware/auth.validator");
    // user routes
    router
        .route("/v1/registration")
        .post(userValidationRules, validate, users.create);

    router
        .route("/v1/signin")
        .post(userSigninValidationRules(), validate, users.signin);

    router.route("/v1/logout").post(validateAuthenticateRequest, users.logout);

    app.use("/api", router);
};
