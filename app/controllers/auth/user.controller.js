const db = require("../../models");
const handleDbErrorResponse = require("../../utils/error-handler.utils");

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
  res.status(200).json(req.body);
};
