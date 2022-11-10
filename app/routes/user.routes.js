module.exports = (app) => {
  const users = require("../controllers/auth/user.controller");
  const router = require("express").Router();

  const userValidationRules = require("../middleware/user-create.validator");
  const validate = require("../middleware/validate");

  router.route("/v1/user").post(userValidationRules(), validate, users.create);

  app.use("/api", router);
};
