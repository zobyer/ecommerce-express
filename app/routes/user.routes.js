module.exports = (app) => {
  const users = require("../controllers/auth/user.controller")
  const router = require("express").Router()

  router.route("/user").post(users.create)

  app.use("/api", router)
}
