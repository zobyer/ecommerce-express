const Sequelize = require("sequelize");
const db = require("../../models");

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

    res.status(403).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log(error.errors[0].message);
    res.status(404).json({ status: false, message: error.errors[0].message });
  }
};
