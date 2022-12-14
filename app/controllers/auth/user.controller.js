const db = require("../../models");
const handleDbErrorResponse = require("../../utils/error-handler.utils");
const genAccessToken = require("../../utils/token.utils");
const jwt = require("jsonwebtoken");
require("dotenv/config");

exports.create = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const user = await db.users.create({
      name: name,
      email: email,
      phone: phone,
      password: password,
      published: true,
      createdAt: new Date(),
    });

    res.status(200).json({ message: "User Created Successfully" });
  } catch (error) {
    const errors = await handleDbErrorResponse(error);
    res.status(422).json({ status: false, errors });
  }
};

exports.signin = async (req, res) => {
  const loginEmail = req.body.email;
  const loginPass = req.body.password;
  try {
    const user = await db.users.findOne({ where: { email: loginEmail } });
    if (!user)
      res.status(422).json({ status: false, message: "Not a valid user" });

    if (!(await user.validPassword(loginPass, user.password)))
      res.status(401).send({ error: "Invalid credentials" });

    const accessToken = genAccessToken(user.email, "5s");
    const userInfo = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      accessToken: accessToken,
    };

    res.status(200).json(userInfo);
  } catch (error) {
    console.log(error);
    const errors = await handleDbErrorResponse(error);
    res.status(422).json({ status: false, errors });
  }
};

exports.logout = async (req, res) => {
  try {
    // jwt.sign({ email: req.body.user.email }, process.env.ACCESS_TOKEN_SECRET, {
    //   expiresIn: "1s",
    // });
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ status: true, message: "Logout successfull" });
};
